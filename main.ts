// The Funniest Office Joke, Judged Head to Head
// Writes a single one-line office joke to /output/entry.txt.
// Node 22 stdlib only: no dependencies, no network, no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I hit reply-all asking to be removed from this thread — 47 colleagues have replied-all to agree, and HR has scheduled a meeting about it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
