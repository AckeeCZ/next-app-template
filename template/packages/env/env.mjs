import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
    shared: {
        NEXT_PUBLIC_SENTRY_DSN: process.env.NODE_ENV === 'development' ? z.string().optional() : z.string(),
        NEXT_PUBLIC_DEV_SENTRY_DISABLED: z.enum(['true', 'false']).optional(),
    },
    /**
     * Specify your server-side environment variables schema here. This way you can ensure the app isn't
     * built with invalid env vars.
     */
    server: {},
    /**
     * Specify your client-side environment variables schema here.
     * For them to be exposed to the client, prefix them with `NEXT_PUBLIC_`.
     */
    client: {
        NEXT_PUBLIC_BUILD_ENV: z.enum(['development', 'stage', 'production']),
        NEXT_PUBLIC_NODE_ENV: z.enum(['development', 'production', 'test']),
    },
    /**
     * Destructure all variables from `process.env` to make sure they aren't tree-shaken away.
     */
    runtimeEnv: {
        NEXT_PUBLIC_BUILD_ENV: process.env.NEXT_PUBLIC_BUILD_ENV,
        NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
        NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,

        // Dev
        ...(process.env.NODE_ENV === 'development' && {
            NEXT_PUBLIC_DEV_SENTRY_DISABLED: process.env.NEXT_PUBLIC_DEV_SENTRY_DISABLED,
        }),
    },
    skipValidation: !!process.env.SKIP_ENV_VALIDATION || process.env.npm_lifecycle_event === 'lint',
});
