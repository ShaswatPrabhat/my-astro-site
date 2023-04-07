import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercelServerless from "@astrojs/vercel/serverless";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com/",
  integrations: [mdx(), sitemap(), react()],
  output: "server",
  adapter: vercelServerless(),
});
