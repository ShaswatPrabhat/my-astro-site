import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercelServerless from "@astrojs/vercel/serverless";
import react from "@astrojs/react";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://shaswat.vercel.app/",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "dracula" },
    }),
    sitemap({
      customPages: [
        "https://shaswat.vercel.app/blog",
        "https://shaswat.vercel.app/about",
        "https://shaswat.vercel.app/notes",
        "https://shaswat.vercel.app/library",
      ],
    }),
    react(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  output: "server",
  adapter: vercelServerless(),
});
