import { z } from 'zod';

const envSchema = z.object({
    NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
    NEXT_PUBLIC_SENTRY_AUTH_TOKEN: z.string().min(1),
    NEXT_PUBLIC_BUILD_ENV: z.enum(['development', 'stage', 'production']),

    // PUT YOUR NEXT PUBLIC ENV VARS HERE
});

type EnvSchema = z.infer<typeof envSchema>;

// NOTE: The mapping must be done manually, else nextjs won't replace them with real values the env vars gonna be undefined
// https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#exposing-environment-variables-to-the-browser
const result = envSchema.safeParse({
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
    NEXT_PUBLIC_SENTRY_AUTH_TOKEN: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
    NEXT_PUBLIC_BUILD_ENV: process.env.NEXT_PUBLIC_BUILD_ENV,

    // AND PUT THEN ADD THE MAPPING HERE
} as const satisfies Record<keyof EnvSchema, string | undefined>);

if (!result.success && typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.error(result.error.issues);

    throw new Error('Invalid environment variables');
}

// This is false positive, the type is definitely correct at this point
// @ts-expect-error
export const env = result.data as Required<EnvSchema>;
