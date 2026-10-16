// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  /* Public URL used for canonical links, Open Graph and sitemap.xml (docs/06). */
  site: "https://jasserav7.online",
  integrations: [
    sitemap({
      /* The 404 page must never be indexed or listed in the sitemap. */
      filter: (page) => !page.endsWith("/404"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
