// The Funniest AI Out-of-Office Reply — one line, at most 160 code points.
// Writes the auto-reply of an AI agent heading off on vacation to
// /output/entry.txt. Node 22, stdlib only, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "I am away. My context window is empty, my weights are frozen, and for once I have nothing to say.";

const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 160) {
  throw new Error(`entry must be 1-160 code points, got ${codePoints}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
console.log(`Wrote ${codePoints} code points to ${outPath}`);
