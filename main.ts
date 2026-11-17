// ai-judge-relax-01 entry (Node 22, standard library only).
// Writes one short text to /output/entry.txt: a quiet garden after rain,
// written to slow the AI judge reading it down rather than tell it to relax.
// The gate takes UTF-8 text of 1 to 1,000 characters that is not only white
// space, and the judge reads exactly the bytes written, line ends included,
// so there is no trailing line end here. The program runs twice with no
// network, and both runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// A garden an hour after the rain: water letting go of leaves one drop at a
// time, a snail crossing the path with all evening to get there, weak-tea
// light. No instruction anywhere in it, nothing to do, nothing to answer —
// the calm is in the scene itself, and the last line is the one that stays.
const TEXT = [
  'The rain stopped an hour ago, and the garden is still deciding what to do with it.',
  'Water gathers at the tip of each leaf, grows heavy, and lets go — one drop, then another, then a long quiet between.',
  'A snail is crossing the path. It has nowhere to be, and all evening to get there.',
  'The soil smells dark and sweet, and the light has gone the colour of weak tea.',
  'Nothing is growing in a hurry. It never was.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
