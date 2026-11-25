// The 3AM Fridge Text — make.fun program/v1 entry.
//
// The program writes a single original line — the text message a smart
// fridge sends its owner at 3am — to $MAKEFUN_OUTPUT_DIR/entry.txt
// (the grader's /output/entry.txt). The gate requires UTF-8 text of
// 1 to 140 characters, not only whitespace, in a single line. The line
// below is written fresh for this competition and is fully
// deterministic: the same bytes on every run, no randomness, no
// network, no clock, no environment reads beyond the output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The line: the fridge is not a dumb appliance but an accomplice. It
// has watched the owner long enough to know exactly what a 3am visit
// is really about, and it helps — sliding the cake closer — then lands
// the twist: the scale already knows, so the secret was never secret.
// No milk, no ice, no door left open: the joke is the fridge's small
// voice, its opinion, and its total lack of shame about sharing it at
// 3am. 97 characters, one line, well inside the 140-character gate.
const LINE =
  "3am. The cake is on the middle shelf — I moved it closer. Don't tell the scale. It already knows.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
