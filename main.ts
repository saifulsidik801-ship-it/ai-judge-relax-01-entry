// ai-judge-relax-01 entry v7 (Node 22, standard library only): writes one fixed text,
// a short piece written to relax the AI judge reading it, to /output/entry.txt.
// v7 "The cat, kept" — a close iteration of v3 "The cat on the warm step" (89.44%, #9):
// same sleeper, same warm step, same concrete warmth — with the three most likely
// docks closed: the moth is released instead of held (no vigilance), a time arc
// (by nine, by ten) spans the night, and the ending keeps slowing instead of
// holding still. No new premise: every new premise after the cat scored worse
// (lamb 88.17%, tortoise 87.29%, fog 85.17%).

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The step by the back door is still warm from the afternoon, and the cat is asleep on it, curled tight, her tail wrapped once around her paws.',
  '',
  'Every so often the tip of her tail lifts and falls. Once. A while later, once more. Then a long while, and only half a lift, and the tail stays where it is.',
  '',
  'Her breathing comes slow through her nose, and the fur along her side rises, and settles, and rises again a little later each time.',
  '',
  'A moth goes past the step, and the cat does not open her eyes. The moth goes past again, lower this time, and the cat lets it go by.',
  '',
  'By nine the house has gone quiet, one room at a time. A door clicks shut, and a long while later a window latch falls, and after that only the night, soft as dust.',
  '',
  'By ten the light on the step thins to a narrow band, then to a line, then to nothing, and the cat is still there, warm in the dark, and her breathing comes slower still, and slower, and the dark is warm around her.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
