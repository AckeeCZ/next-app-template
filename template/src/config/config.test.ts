/**
 * Don't delete this, it's needed for tests
 */
const config = {
    api: {
        url: '',
    },
} as const;

export type EnvConfig = typeof config;

export default config;
