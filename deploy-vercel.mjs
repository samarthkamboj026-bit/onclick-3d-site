#!/usr/bin/env node
import fs from "fs";
import path from "path";

const PROXY = "http://127.0.0.1:3100/proxy/vercel";
const MATRIX_HEADERS = {
  "x-matrix-room-id": "!sTN5XcMs86mjSK9u:localhost",
  "x-matrix-thread-id": "$1MAifB0tQxuw9I9Z9ipXMPX0W-0rQOsELHleI4Dzlpw",
};
const TEAM_ID = "team_Cre9H3feAskcerK6ZCbkfQHz";
const PROJECT = "onclick-3d-site";
const ROOT = process.cwd();

const SKIP = new Set(["node_modules", ".next", "out", "deploy-vercel.mjs"]);

function walk(dir, base = "") {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue;
    const rel = base ? `${base}/${entry.name}` : entry.name;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walk(full, rel));
    else files.push(rel);
  }
  return files;
}

function isTextFile(rel) {
  const ext = path.extname(rel).toLowerCase();
  return [".js", ".ts", ".tsx", ".jsx", ".json", ".md", ".css", ".html", ".txt", ".svg", ".mjs"].includes(ext);
}

async function createDeployment(files) {
  const body = {
    name: PROJECT,
    project: PROJECT,
    target: "production",
    files,
    projectSettings: {
      framework: "nextjs",
      installCommand: "npm install",
      buildCommand: "npm run build",
    },
  };
  const res = await fetch(`${PROXY}/v13/deployments?teamId=${TEAM_ID}`, {
    method: "POST",
    headers: { ...MATRIX_HEADERS, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(`Deploy failed: ${res.status} ${JSON.stringify(data)}`);
  return data;
}

async function waitReady(deploymentId, maxWait = 360000) {
  const start = Date.now();
  while (Date.now() - start < maxWait) {
    const res = await fetch(`${PROXY}/v13/deployments/${deploymentId}?teamId=${TEAM_ID}`, {
      headers: MATRIX_HEADERS,
    });
    const d = await res.json();
    const state = d.readyState;
    console.log(`  status: ${state}`);
    if (state === "READY") return d;
    if (state === "ERROR" || state === "CANCELED") {
      throw new Error(`Deployment ${state}: ${JSON.stringify(d.error || d)}`);
    }
    await new Promise((r) => setTimeout(r, 10000));
  }
  throw new Error("Deployment timed out");
}

async function main() {
  const relFiles = walk(ROOT);
  console.log(`Inlining ${relFiles.length} files...`);
  const files = relFiles.map((rel) => {
    const buf = fs.readFileSync(path.join(ROOT, rel));
    if (isTextFile(rel)) {
      return { file: rel, data: buf.toString("utf8"), encoding: "utf-8" };
    }
    return { file: rel, data: buf.toString("base64"), encoding: "base64" };
  });

  console.log("Creating deployment...");
  const deployment = await createDeployment(files);
  const id = deployment.id;
  const url = deployment.url;
  console.log(`Deployment ${id} started: https://${url}`);
  console.log("Waiting for build (this may take 2-4 min)...");
  const ready = await waitReady(id);
  const aliases = ready.alias || [];
  console.log(JSON.stringify({ id, url: `https://${url}`, aliases, readyState: ready.readyState }, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
