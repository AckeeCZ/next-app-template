declare module NodeJS {
    export interface ProcessEnv {
        NEXT_PUBLIC_BUILD_ENV: 'development' | 'stage' | 'production';

        NEXT_PUBLIC_SENTRY_DSN: string | undefined;
    }
}
