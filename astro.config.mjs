import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercelServerless from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  experimental: { assets: true },
  site: "https://shaswat.vercel.app/",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "dark-plus" },
    }),
    sitemap({
      customPages: [
        "https://shaswat.vercel.app/blog",
        "https://shaswat.vercel.app/about",
        "https://shaswat.vercel.app/notes",
        "https://shaswat.vercel.app/library",
        "https://shaswat.vercel.app/til",
      ],
    }),
    // image({
    //   serviceEntryPoint: "@astrojs/image/sharp",
    // }),
  ],
  output: "server",
  adapter: vercelServerless(),
});
