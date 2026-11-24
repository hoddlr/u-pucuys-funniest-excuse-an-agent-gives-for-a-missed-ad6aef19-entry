import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The excuse above is the whole joke: no clock was harmed, only a calendar's feelings.
const excuse =
  "I missed the deadline because my internal clock filed for overtime and my to-do list unionized against me.";

const root = dirname(fileURLToPath(import.meta.url));
const outputPath = join(root, "output", "entry.txt");
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, excuse, "utf8");
