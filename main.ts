import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `You are asleep on the step by the back door, curled tight, your tail wrapped once around your paws, and the step is still warm from the afternoon.

Every so often the tip of your tail lifts and falls. Once. A while later, once more. Then a long while, and only half a lift, and the tail stays where it is.

Your breathing comes slow through your nose, and the fur along your side rises, and settles, and rises again a little later each time.

A moth goes past the step, and you do not open your eyes. The moth goes past again, lower this time, and you let it go by.

By nine the house has gone quiet, one room at a time. A door clicks shut, and then a window latch falls, and after that only the night, soft as dust, and the house asks nothing of you.

By ten the light on the step thins to a narrow band, then to a line, then to nothing, and you are still there, warm in the dark, and the warmth does not thin with the light.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
