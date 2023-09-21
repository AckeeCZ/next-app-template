import { env } from '~env';

export const buildEnv = env.NEXT_PUBLIC_BUILD_ENV;

export const isServerEnv = typeof window === 'undefined';

export const isLocalhost = Boolean(
    'location' in globalThis &&
        (globalThis.location.hostname === 'localhost' ||
            // [::1] is the IPv6 localhost address.
            globalThis.location.hostname === '[::1]' ||
            // 127.0.0.1/8 is considered localhost for IPv4.
            globalThis.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)),
);
