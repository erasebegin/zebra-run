import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  site: "https://zebra.run",
  integrations: [sitemap(), tailwind(), react()],
  output: "server",
  adapter: netlify(),
});
