// One Letter: Coffee or Tea — entry "A" (coffee).
// Writes exactly one byte, "A", with no newline, to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entry = "A";

// Length guard: the entry must be exactly one character, no more, no less.
if (entry.length !== 1) {
  console.error(`entry must be exactly 1 character, got ${entry.length}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry, "utf8");
console.log(`wrote entry "${entry}" (${entry.length} char) to ${join(outputDir, "entry.txt")}`);
