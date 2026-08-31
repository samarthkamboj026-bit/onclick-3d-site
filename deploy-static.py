#!/usr/bin/env python3
"""Deploy prebuilt out/ folder to Vercel production."""
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
ROOT = Path(__file__).parent / "out"


def sha1_file(path: Path) -> str:
    h = hashlib.sha1()
    with open(path, "rb") as f:
        for chunk in iter(lambda: f.read(65536), b""):
            h.update(chunk)
    return h.hexdigest()


def upload_file(path: Path, digest: str):
    content = path.read_bytes()
    headers = {**BASE_HEADERS, "Content-Type": "application/octet-stream", "x-vercel-digest": digest}
    req = urllib.request.Request(f"{PROXY}/v2/files", data=content, headers=headers, method="POST")
    try:
        urllib.request.urlopen(req, timeout=60)
    except urllib.error.HTTPError as e:
        if e.code not in (409, 400):
            raise


def api_json(method: str, endpoint: str, body=None):
    headers = {**BASE_HEADERS, "Content-Type": "application/json"}
    data = json.dumps(body).encode() if body else None
    req = urllib.request.Request(f"{PROXY}{endpoint}", data=data, headers=headers, method=method)
    with urllib.request.urlopen(req, timeout=180) as resp:
        return json.loads(resp.read())


def main():
    files = {p.relative_to(ROOT).as_posix(): p for p in ROOT.rglob("*") if p.is_file()}
    print(f"Uploading {len(files)} static files from out/")

    file_list = []
    for i, (rel, path) in enumerate(sorted(files.items())):
        digest = sha1_file(path)
        file_list.append({"file": rel, "sha": digest, "size": path.stat().st_size})
        if i % 50 == 0:
            print(f"  {i+1}/{len(files)}...")
        upload_file(path, digest)

    deployment = api_json(
        "POST",
        f"/v13/deployments?teamId={TEAM_ID}&forceNew=1",
        {
            "name": PROJECT_NAME,
            "files": file_list,
            "target": "production",
            "routes": [{"src": "/(.*)", "dest": "/$1"}],
        },
    )
    print(json.dumps({
        "url": f"https://{deployment.get('url', 'onclick-3d-site.vercel.app')}",
        "id": deployment.get("id"),
        "readyState": deployment.get("readyState"),
    }, indent=2))


if __name__ == "__main__":
    main()
