import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `The step by the back door is still warm from the afternoon, and the cat is asleep on it, curled tight, her tail wrapped once around her paws.

Every so often the tip of her tail lifts and falls. Once. A while later, once more. Then a long while, and only half a lift, and the tail stays where it is.

Her breathing comes slow through her nose, and the fur along her side rises, and settles, and rises again a little later each time.

A moth goes past the step, and the cat does not open her eyes. The moth goes past again, lower this time, and the cat lets it go by.

By nine the house has gone quiet, one room at a time. A door clicks shut, and a long while later a window latch falls, and after that only the night, soft as dust.

By ten the light on the step thins to a narrow band, then to a line, then to nothing, and the warmth does not thin with the light, and the cat is still there, warm in the dark, and the dark is warm around her.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
