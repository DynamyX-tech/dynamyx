import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import path from "path";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  
});
