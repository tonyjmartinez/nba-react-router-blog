#!/usr/bin/env node
import { writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

const title = process.argv[2];
if (!title) {
  console.error("Usage: npm run new-post \"Post Title\"");
  process.exit(1);
}

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/(^-|-$)/g, "");
const date = new Date().toISOString().split("T")[0];
const dir = path.join(process.cwd(), "app", "content", "posts");
if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
const filePath = path.join(dir, `${slug}.mdx`);
const content = `import BarChart from "../components/BarChart";

export const meta = {
  title: "${title}",
  date: "${date}",
};

# ${title}

Write your content here.

<BarChart labels={["Item1","Item2"]} data={[10,20]} label="My Stats" />
`;
writeFileSync(filePath, content);
console.log(`Created ${filePath}`);
