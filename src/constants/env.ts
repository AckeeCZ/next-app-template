const environments = {
    PRODUCTION: 'production',
    STAGE: 'stage',
    DEVELOPMENT: 'development',
};

export const currentEnv = process.env.NEXT_PUBLIC_BUILD_ENV || process.env.NODE_ENV;

export const isEnvDevelopment = currentEnv === environments.DEVELOPMENT;

export const isEnvStage = currentEnv === environments.STAGE;

export const isEnvProduction = currentEnv === environments.PRODUCTION;

export const isServerEnv = typeof window === 'undefined';

export const isLocalhost = Boolean(
    process.env.REACT_APP_IS_LOCALHOST ||
        ('location' in globalThis &&
            (globalThis.location.hostname === 'localhost' ||
                // [::1] is the IPv6 localhost address.
                globalThis.location.hostname === '[::1]' ||
                // 127.0.0.1/8 is considered localhost for IPv4.
                globalThis.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))),
);
