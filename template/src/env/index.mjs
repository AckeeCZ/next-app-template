import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

/**
 * It must be '.mjs' because it's imported (that's validated on build) by 'next.config.mjs'
 */
export const env = createEnv({
    /**
     * Specify what prefix the client-side variables must have.
     * This is enforced both on type-level and at runtime.
     */
    clientPrefix: '',

    server: {},

    client: {
        LOKSE_SERVICE_ACCOUNT_EMAIL: z.string(),
        LOKSE_PRIVATE_KEY: z.string(),

        NEXT_TELEMETRY_DISABLED: z.enum(['1', '0']).optional(),

        NEXT_PUBLIC_SENTRY_DSN: z.string(),
        NEXT_PUBLIC_SENTRY_AUTH_TOKEN: z.string().min(1),

        NEXT_PUBLIC_BUILD_ENV: z.enum(['development', 'stage', 'production']),
    },

    /**
     * What object holds the environment variables at runtime.
     * Often `process.env` or `import.meta.env`
     */
    runtimeEnv: process.env,
});
