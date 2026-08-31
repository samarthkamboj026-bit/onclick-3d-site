#!/usr/bin/env python3
"""Push local git repo to GitHub via integration API."""
import base64
import json
import subprocess
import urllib.request
from pathlib import Path

API = "http://127.0.0.1:3100/internal/integration/call"
HEADERS = {
    "Content-Type": "application/json",
    "x-matrix-room-id": "!sTN5XcMs86mjSK9u:localhost",
    "x-matrix-thread-id": "$1MAifB0tQxuw9I9Z9ipXMPX0W-0rQOsELHleI4Dzlpw",
}
OWNER = "samarthkamboj026-bit"
REPO = "onclick-3d-site"
ROOT = Path(__file__).parent


def gh(method: str, endpoint: str, body=None):
    payload = {
        "service": "github-sam",
        "intent": endpoint,
        "params": {"endpoint": endpoint, "method": method, "body": body or {}},
    }
    req = urllib.request.Request(API, json.dumps(payload).encode(), HEADERS, method="POST")
    with urllib.request.urlopen(req, timeout=120) as resp:
        data = json.loads(resp.read())
    if "error" in data and "result" not in data:
        raise RuntimeError(data)
    return data.get("result", data).get("data", data.get("result", data))


def main():
    # Get files from git ls-tree
    out = subprocess.check_output(["git", "ls-tree", "-r", "HEAD", "--name-only"], cwd=ROOT, text=True)
    files = [f for f in out.strip().split("\n") if f]

    tree = []
    for rel in files:
        content = (ROOT / rel).read_bytes()
        blob = gh("POST", f"/repos/{OWNER}/{REPO}/git/blobs", {
            "content": base64.b64encode(content).decode(),
            "encoding": "base64",
        })
        tree.append({"path": rel, "mode": "100644", "type": "blob", "sha": blob["sha"]})
        print(f"  blob {rel}")

    tree_obj = gh("POST", f"/repos/{OWNER}/{REPO}/git/trees", {"tree": tree})
    commit_msg = subprocess.check_output(["git", "log", "-1", "--format=%B"], cwd=ROOT, text=True).strip()
    commit = gh("POST", f"/repos/{OWNER}/{REPO}/git/commits", {
        "message": commit_msg,
        "tree": tree_obj["sha"],
    })

    try:
        gh("PATCH", f"/repos/{OWNER}/{REPO}/git/refs/heads/main", {"sha": commit["sha"], "force": True})
    except Exception:
        gh("POST", f"/repos/{OWNER}/{REPO}/git/refs", {"ref": "refs/heads/main", "sha": commit["sha"]})

    print(json.dumps({"pushed": True, "commit": commit["sha"], "url": f"https://github.com/{OWNER}/{REPO}"}))


if __name__ == "__main__":
    main()
