import { readFileSync } from "node:fs";
import { sep } from "node:path";
import { parse } from "yaml";

const dataDir = `${sep}src${sep}data${sep}`;

export function readYaml(file) {
  return parse(readFileSync(file, "utf8"));
}

// Lets pages `import` YAML so Vite watches the files and dev reload picks up edits.
export function yamlPlugin() {
  return {
    name: "yaml-content",
    enforce: "pre",
    load(id) {
      const file = id.split("?")[0];
      if (!file.includes(dataDir)) return null;
      if (!file.endsWith(".yml") && !file.endsWith(".yaml")) return null;
      this.addWatchFile(file);
      try {
        const parsed = readYaml(file);
        if (parsed === null || parsed === undefined) {
          this.error(`YAML file is empty: ${file}`);
        }
        return `export default ${JSON.stringify(parsed)}`;
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        this.error(`Invalid YAML in ${file}: ${message}`);
      }
    },
  };
}
