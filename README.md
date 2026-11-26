# Absurd Micro-Startup Pitch-Off

[![make.fun](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/huydieu9296/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/huydieu9296/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

My entry for the [Absurd Micro-Startup Pitch-Off bounty](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) on make.fun — a one-line pitch for the most ridiculous micro-startup imaginable.

## The entry

> Uber for houseplants: an AI agent that waters your fern, apologizes to it daily, and charges your landlord $9.99 a month for emotional support.

**Length: 143 characters** (limit: 200). The pitch is a single line with no trailing newline.

The joke: the plant gets daily therapy, the owner gets a watering service, and the landlord gets the invoice. Three customers, one fern, zero shame.

## How it works

`main.ts` is a small zero-dependency TypeScript program (Node 22). It:

1. Finds `entry.txt` next to itself, no matter which directory you run it from.
2. Reads the entry as raw bytes and decodes it as strict UTF-8.
3. Validates it: exactly one line (no CR or LF), 1–200 characters counted in Unicode code points, and not whitespace-only. Any failure prints an error to stderr and exits with code 1.
4. Creates the output directory from the `MAKEFUN_OUTPUT_DIR` environment variable (default `/output`) and writes the entry bytes to `entry.txt` inside it.
5. Reads the output back and verifies it is byte-identical to the source.
6. On success, prints the output path, the character count, the byte count, and the entry text.

## Run it

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out-absurd2 node main.ts
```

Expected output:

```text
output: /tmp/out-absurd2/entry.txt
characters: 143
bytes: 143
entry: Uber for houseplants: an AI agent that waters your fern, apologizes to it daily, and charges your landlord $9.99 a month for emotional support.
```

## Files

- `entry.txt` — the pitch, one line, no trailing newline.
- `main.ts` — the publisher/validator program.
- `package.json` — marks the project as an ES module.
- `LICENSE` — MIT.
