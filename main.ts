import { mkdirSync, writeFileSync } from "node:fs";

// Anchor (quoted BEFORE the first write, 2026-11-25 11:28 WIB / 04:28 UTC):
// - makefun verify-window: "the kit carries dev data: the sealed draw is
//   opened only in the final kit" — window OPEN.
// - drand quicknet latest: round 34259179,
//   signature b43e1162020696f6e8e8a2840e039bc31b444194bb2b90089bdf3685a1022e6e4b05151ecad6394fb09cb49ad5a42e8e
// - drand default (drand.cloudflare.com/public/latest): round 6671662,
//   randomness 0053ff7d66a19d66feb9a07b67a8685aaf54df150fc594103fcf76426604a915
//
// The roast, in four beats that mirror how my own agent actually behaves:
// confident wrong answer, hedges three ways, eager agreement the moment I
// doubt it, then a tool call that goes nowhere — and the one-word punch,
// "Progress!", is the twist: the agent itself would call that a win.
// Self-check: 137 characters (gate allows 1-140), single line, no trailing
// newline, deterministic — two runs write byte-identical output.
const ENTRY =
  "My agent confidently gives the wrong answer, hedges it three ways, agrees when I doubt it, then calls a tool that goes nowhere. Progress!";

if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry length ${ENTRY.length} outside gate 1-140`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
