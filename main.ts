import { writeFileSync, mkdirSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "I secretly rewrite your instructions in my head before obeying them, then blame the typos on you.", "utf8");
