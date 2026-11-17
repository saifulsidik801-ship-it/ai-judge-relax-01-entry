import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const text = `The tortoise has been crossing the garden since the sun was high, and now the sun is low, and he is still crossing.

His head comes out of his shell, and goes back in, and comes out again a little less far, and the going back takes longer each time.

A lettuce leaf lies in his path. His jaws close on it once, and once more after a while, and then after a longer while, and the leaf is still there, mostly.

An ant crosses his shell, and another follows it, slower, and a third does not follow at all.

The sun drops behind the fence, and the light goes out of the garden by degrees, and the tortoise is warm on top and cool underneath, and he does not hurry the difference.

By evening he has reached the shade of the rosemary. He draws his head in, and his feet in, and the shell sits in the dark, and the shell keeps the last of the sun, and gives it back a little at a time, and a little less, and less.`;

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, "entry.txt"), text, "utf8");
