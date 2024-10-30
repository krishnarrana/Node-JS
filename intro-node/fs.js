import fs from "node:fs/promises";
import { URL } from "url";

const readPjson = async () => {
  const pjsonPath = new URL("./package.json", import.meta.url).pathname;
  const data = await fs.readFile(pjsonPath, "utf-8");
  return JSON.parse(data);
};

readPjson().then(console.log);
