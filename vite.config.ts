import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vite.dev/config/
export default defineConfig({
  // preview: {
  //   host: true,
  //   port: 4173,
  //   allowedHosts: [
  //     "www.chillhouse.meme",
  //     "chillhouse.meme",
  //   ],
  // },
  plugins: [
    react(),
    ViteImageOptimizer({
      includePublic: true,
      cache: false,
      exclude: [
        "favicon.ico",
        "banner-1500x500.jpeg",
        "pfp-400x400.jpg",
        "chillhouse-logo-animated.webp",
      ],
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 25,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 25,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 25,
      },
      tiff: {
        // https://sharp.pixelplumbing.com/api-output#tiff
        quality: 25,
      },
      // gif does not support lossless compression
      // https://sharp.pixelplumbing.com/api-output#gif
      gif: {},
      webp: {
        // https://sharp.pixelplumbing.com/api-output#webp
        quality: 25,
        lossless: false,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
