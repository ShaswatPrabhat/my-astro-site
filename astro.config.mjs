import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercelServerless from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com/",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "dracula" },
    }),
    sitemap(),
    react(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  output: "server",
  adapter: vercelServerless(),
});
