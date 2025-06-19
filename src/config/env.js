import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {},

  /**
   * The prefix that client-side variables must have. This is enforced both at
   * a type-level and at runtime.
   */
  clientPrefix: "VITE_",

  client: {
    VITE_SITE_URL: z.string(),
    VITE_TOKEN_TICKER: z.string(),
    VITE_TOKEN_MINT: z.string(),
    VITE_TOKEN_DEX: z.string(),
    VITE_TOKEN_TWITTER: z.string(),
  },

  /**
   * What object holds the environment variables at runtime. This is usually
   * `process.env` or `import.meta.env`.
   * We can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    // Server
    // NODE_ENV: process.env.NODE_ENV,

    // Client
    VITE_SITE_URL: import.meta.env.VITE_SITE_URL,
    VITE_TOKEN_TICKER: import.meta.env.VITE_TOKEN_TICKER,
    VITE_TOKEN_MINT: import.meta.env.VITE_TOKEN_MINT,
    VITE_TOKEN_DEX: import.meta.env.VITE_TOKEN_DEX,
    VITE_TOKEN_TWITTER: import.meta.env.VITE_TOKEN_TWITTER,
  },

  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially
   * useful for Docker builds.
   */
  skipValidation: !!import.meta.env.SKIP_ENV_VALIDATION,

  /**
   * By default, this library will feed the environment variables directly to
   * the Zod validator.
   *
   * This means that if you have an empty string for a value that is supposed
   * to be a number (e.g. `PORT=` in a ".env" file), Zod will incorrectly flag
   * it as a type mismatch violation. Additionally, if you have an empty string
   * for a value that is supposed to be a string with a default value (e.g.
   * `DOMAIN=` in an ".env" file), the default value will never be applied.
   *
   * In order to solve these issues, we recommend that all new projects
   * explicitly specify this option as true.
   */
  emptyStringAsUndefined: true,
});
