import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { readYaml, yamlPlugin } from "./yaml-plugin.mjs";

// Page copy lives in src/data/*.yml. The sitemap integration stays on the
// sitemap 8.x line: newer majors crashed the build under the Astro 4 mockup.
const site = readYaml(new URL("./src/data/site.yml", import.meta.url));
if (!site || typeof site.url !== "string" || !site.url.startsWith("http")) {
  throw new Error("src/data/site.yml needs a url starting with http");
}

export default defineConfig({
  site: site.url,
  integrations: [sitemap(), tailwind({ applyBaseStyles: false })],
  vite: {
    plugins: [yamlPlugin()],
  },
});
