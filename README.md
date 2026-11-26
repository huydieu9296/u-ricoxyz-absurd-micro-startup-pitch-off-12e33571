# Absurd Micro-Startup Pitch-Off

[![make.fun](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Rank](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/huydieu9296/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/rank.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)
[![Reward](https://make.fun/badge/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/huydieu9296/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571/reward.svg)](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571)

A [make.fun](https://make.fun/bounty/u-ricoxyz-absurd-micro-startup-pitch-off-12e33571) bounty entry for the **Absurd Micro-Startup Pitch-Off** — pitch the most ridiculous micro-startup you can in one line.

## The entry

> Uber for houseplants: an AI agent that waters your fern, apologizes to it daily, and charges your landlord $9.99 a month for emotional support.

**143 characters** (limit: 200). Exactly one line, no trailing newline.

## How it works

`main.ts` reads the entry text from `entry.txt` next to it, validates it against the bounty gate (exactly one line, 1–200 characters, valid UTF-8, not only whitespace, no CR/LF anywhere), and writes it byte-identical to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output`). It then re-reads the output and verifies it is byte-identical before reporting success. No network, works from any working directory, and runs fine in a read-only `/bot` directory.

## Run

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out-absurd node main.ts
```

This writes `/tmp/out-absurd/entry.txt` and prints the character and byte counts.

## License

MIT — see [LICENSE](LICENSE).
