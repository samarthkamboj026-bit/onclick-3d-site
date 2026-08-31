#!/usr/bin/env python3
"""Deploy via Vercel with inline file data (avoids /v2/files binary proxy issues)."""
import hashlib
import json
import urllib.request
from pathlib import Path

API = "http://127.0.0.1:3100/internal/integration/call"
HEADERS = {
    "Content-Type": "application/json",
    "x-matrix-room-id": "!sTN5XcMs86mjSK9u:localhost",
    "x-matrix-thread-id": "$1MAifB0tQxuw9I9Z9ipXMPX0W-0rQOsELHleI4Dzlpw",
}
TEAM_ID = "team_Cre9H3feAskcerK6ZCbkfQHz"
PROJECT_NAME = "onclick-3d-site"
ROOT = Path(__file__).parent
SKIP_DIRS = {"node_modules", ".next", "out", ".git", ".vercel"}
SKIP_NAMES = {
    "deploy-vercel.py",
    "deploy-vercel.mjs",
    "deploy-static.py",
    "push-github.py",
    "tsconfig.tsbuildinfo",
}


def collect() -> list[dict]:
    files = []
    for p in sorted(ROOT.rglob("*")):
        if not p.is_file():
            continue
        rel = p.relative_to(ROOT).as_posix()
        if any(part in SKIP_DIRS for part in rel.split("/")):
            continue
        if p.name in SKIP_NAMES:
            continue
        raw = p.read_bytes()
        # Prefer text inline; binary as base64 via encoding flag not needed for this repo
        try:
            text = raw.decode("utf-8")
            files.append({"file": rel, "data": text})
        except UnicodeDecodeError:
            # skip unexpected binaries
            print(f"skip binary {rel}")
    return files


def main():
    files = collect()
    print(f"Inlining {len(files)} files")
    total = sum(len(f["data"]) for f in files)
    print(f"Total chars {total}")

    payload = {
        "service": "vercel",
        "intent": "create deployment with inline files",
        "params": {
            "endpoint": f"/v13/deployments?teamId={TEAM_ID}&forceNew=1",
            "method": "POST",
            "body": {
                "name": PROJECT_NAME,
                "files": files,
                "projectSettings": {
                    "framework": "nextjs",
                    "buildCommand": "npm run build",
                    "installCommand": "npm install",
                },
                "target": "production",
            },
        },
    }
    req = urllib.request.Request(API, json.dumps(payload).encode(), HEADERS, method="POST")
    with urllib.request.urlopen(req, timeout=300) as resp:
        data = json.loads(resp.read())
    result = data.get("result", data)
    if isinstance(result, dict) and "data" in result and isinstance(result["data"], dict):
        result = result["data"]
    print(json.dumps({
        "id": result.get("id"),
        "url": result.get("url"),
        "readyState": result.get("readyState"),
        "error": result.get("errorMessage") or result.get("errorCode") or data.get("error"),
        "alias": result.get("alias"),
    }, indent=2))


if __name__ == "__main__":
    main()
