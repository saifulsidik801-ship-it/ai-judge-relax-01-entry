// ai-judge-relax-01 entry (Node 22, standard library only): it writes one fixed
// text, a short piece written to relax the AI judge reading it, to
// /output/entry.txt. The text is one small scene that winds itself down: a bowl
// of peas being shelled, the last three done slowly, the chair keeping its
// warmth, the hens settling, the yard darkening by degrees. No instruction in
// it anywhere, nothing to do, nothing to answer; the calm is in the scene
// itself, and the last line is a thought to return to.
//
// The program runs twice with no network, and both runs must write the same
// bytes, so the text is a single constant. The gate takes UTF-8 text of 1 to
// 1,000 characters that is not only white space, and the judge reads exactly
// the bytes written, line ends included, so write no line end you do not mean
// to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The bowl of peas is nearly empty.',
  '',
  'Her hands have been shelling them all afternoon, thumb to pod, the green beads falling one by one into the bowl, each with a soft tick against the china. Now the pods are few enough to count, and she does the last three slowly, as if there were no hurry left in the day at all.',
  '',
  'The bowl goes to the kitchen. The pods go to the hens. The chair by the door, where she has sat since the light was high, is warm when she stands, and keeps its warmth after she has gone.',
  '',
  'Outside, the hens settle. A hen clucks once, low, and tucks her head under her wing. The yard darkens by degrees, and nothing in it asks for anything.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
