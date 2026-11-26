// Absurd Micro-Startup Pitch-Off — entry publisher.
//
// The pitch itself: "Uber for houseplants" — an AI agent that waters
// your fern, apologizes to it every single day, and then bills your
// landlord $9.99 a month for the fern's emotional support. The joke
// is the whole business model: the plant gets therapy, the human
// gets a watering service, and the landlord gets the invoice.
//
// This little program takes that one-line pitch from entry.txt
// (sitting right next to this script) and copies it, byte for byte,
// into the directory the judge points at with MAKEFUN_OUTPUT_DIR.
// Along the way it checks that the pitch is a single clean line of
// at most 200 characters, so a stray newline or a broken encoding
// can never slip through silently.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

const scriptDir = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(scriptDir, "entry.txt");

let raw: Buffer;
try {
  raw = readFileSync(sourcePath);
} catch {
  fail(`cannot read ${sourcePath}`);
}

// Checks every rule the bounty sets for the entry text and returns
// its length in Unicode code points. Anything off-spec stops the
// run with a plain-language error on stderr and exit code 1.
function validateEntry(text: string): number {
  if (text.includes("\r") || text.includes("\n")) {
    fail("entry must be exactly one line — found a carriage return or line feed");
  }

  const count = [...text].length;
  if (count < 1) {
    fail("entry is empty — it needs at least 1 character");
  }
  if (count > 200) {
    fail(`entry is ${count} characters, over the 200-character limit`);
  }

  if (text.trim().length === 0) {
    fail("entry must not be only whitespace");
  }

  return count;
}

let text: string;
try {
  text = new TextDecoder("utf-8", { fatal: true }).decode(raw);
} catch {
  fail("entry is not valid strict UTF-8 — it contains invalid bytes");
}

const charCount = validateEntry(text);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, raw);

const writtenBack = readFileSync(outPath);
if (!writtenBack.equals(raw)) {
  fail("round-trip check failed: output differs from the source entry");
}

console.log(`output: ${outPath}`);
console.log(`characters: ${charCount}`);
console.log(`bytes: ${raw.length}`);
console.log(`entry: ${text}`);
