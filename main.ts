// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT = `The fog came up from the river after supper, and it is still coming, slow and low, with nothing to hurry it.

Down the lane a stone wall runs where the shepherd walked home. The fog takes the top stones first, then the middle ones, then the place where the gate was, and the wall is gone the way night takes a field.

In the hut the lantern burns low. Its flame stands, and stands a little less straight, and the light pulls in, closer and closer to the wick, until the hut is only warm in the middle.

By nine the bell on the ewe rings once, far off. By ten it rings once more, further off, and a long while after that not at all, and the quiet does not mind.

Some time after midnight the last stone goes under, and the valley is one smooth white from the river to the hill, and there is nowhere left the lane needs to go.

The fog comes on. Less. Then less.`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
