#!/usr/bin/env python3
"""Deploy onclick-3d-site to Vercel via sidecar proxy (remote build)."""
import hashlib
import json
import urllib.request
from pathlib import Path

PROXY = "http://127.0.0.1:3100/proxy/vercel"
BASE_HEADERS = {
    "x-matrix-room-id": "!sTN5XcMs86mjSK9u:localhost",
    "x-matrix-thread-id": "$1MAifB0tQxuw9I9Z9ipXMPX0W-0rQOsELHleI4Dzlpw",
}
TEAM_ID = "team_Cre9H3feAskcerK6ZCbkfQHz"
PROJECT_NAME = "onclick-3d-site"
ROOT = Path(__file__).parent

SKIP_DIRS = {"node_modules", ".next", "out", ".git", ".vercel"}


def sha1_file(path: Path) -> str:
    h = hashlib.sha1()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()


def collect_files() -> dict[str, Path]:
    files = {}
    for p in ROOT.rglob("*"):
        if not p.is_file():
            continue
        rel = p.relative_to(ROOT).as_posix()
        if any(part in SKIP_DIRS for part in rel.split("/")):
            continue
        if p.name == "deploy-vercel.py":
            continue
        files[rel] = p
    return files


def upload_file(path: Path, digest: str):
    with open(path, "rb") as f:
        content = f.read()
    headers = {**BASE_HEADERS, "Content-Type": "application/octet-stream", "x-vercel-digest": digest}
    req = urllib.request.Request(f"{PROXY}/v2/files", data=content, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        if e.code == 409 or "already" in body.lower():
            return {"skipped": True}
        raise


def api_json(method: str, endpoint: str, body=None):
    headers = {**BASE_HEADERS, "Content-Type": "application/json"}
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(f"{PROXY}{endpoint}", data=data, headers=headers, method=method)
    with urllib.request.urlopen(req, timeout=180) as resp:
        return json.loads(resp.read())


def main():
    files = collect_files()
    print(f"Collected {len(files)} files")

    file_list = []
    for i, (rel, path) in enumerate(sorted(files.items())):
        digest = sha1_file(path)
        size = path.stat().st_size
        file_list.append({"file": rel, "sha": digest, "size": size})
        if i % 20 == 0:
            print(f"  uploading {i+1}/{len(files)}...")
        upload_file(path, digest)

    print("Creating deployment...")
    deployment = api_json(
        "POST",
        f"/v13/deployments?teamId={TEAM_ID}&forceNew=1",
        {
            "name": PROJECT_NAME,
            "files": file_list,
            "projectSettings": {
                "framework": "nextjs",
                "buildCommand": "npm run build",
                "outputDirectory": "out",
                "installCommand": "npm install",
            },
            "target": "production",
        },
    )

    url = deployment.get("url", "")
    aliases = deployment.get("alias", [])
    print(json.dumps({
        "url": f"https://{url}" if url else aliases[0] if aliases else "pending",
        "id": deployment.get("id"),
        "readyState": deployment.get("readyState"),
    }, indent=2))


if __name__ == "__main__":
    main()
