// ai-judge-relax-01 entry (Node 22, standard library only): writes one short
// relaxing text to /output/entry.txt. A lamb asleep in the hay, his ear against
// his mother's side, her heartbeat slowing under him — four interwoven slowing
// systems (heartbeat, breath, lantern, rain), a clock-marked time arc, and an
// ending where the slowing is still happening. 868 characters, inside 1–1000.
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT = [
  'The lamb is asleep in the hay, tucked against his mother\'s side, and the barn is warm around them both.',
  'His ear rests against her, and her heart beats under him, slow, and slower, and slower still, and his breathing falls in behind it, a little later each time.',
  'The hay beneath him rises, and settles, and rises again a little later each time.',
  'The lantern above them burns low. Its flame leans, and leans less, and the light on the hay thins to a glow, and the glow to a warmth you can feel more than see.',
  'By nine the yard outside is quiet. By ten the only sound is the rain on the roof, and the rain comes in drops, and then one drop, a long while after the last.',
  'Outside, the lane beyond the gate is empty, and the gate stands shut.',
  'Nobody comes to wake them. Nobody needs to. Her heart beats, and his breath follows, a little later each time, and later still.',
].join('\n\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
