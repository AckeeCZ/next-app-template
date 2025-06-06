import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

const bool = z.enum(['true', 'false']).transform(value => {
    try {
        return JSON.parse(value) as boolean;
    } catch {
        return undefined;
    }
});

export const env = createEnv({
    shared: {
        NEXT_PUBLIC_SENTRY_DSN: process.env.NODE_ENV === 'development' ? z.string().optional() : z.string(),
        NEXT_PUBLIC_DEV_SENTRY_DISABLED: bool.optional(),
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
        NEXT_PUBLIC_SENTRY_REPORT_URI: z.string().url(),
    },
    /**
     * Destructure all variables from `process.env` to make sure they aren't tree-shaken away.
     */
    runtimeEnv: {
        NEXT_PUBLIC_BUILD_ENV: process.env.NEXT_PUBLIC_BUILD_ENV,
        NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
        NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_DEV_SENTRY_DISABLED:
            process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_DEV_SENTRY_DISABLED : undefined,
        NEXT_PUBLIC_SENTRY_REPORT_URI: process.env.NEXT_PUBLIC_SENTRY_REPORT_URI,
    },
    skipValidation: !!process.env.SKIP_ENV_VALIDATION || process.env.npm_lifecycle_event === 'lint',
});
