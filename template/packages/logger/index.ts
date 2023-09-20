import { captureException, setExtras } from '@sentry/nextjs';
import { debug, disableAll, info, levels, error as loglevelError, setLevel, trace, warn } from 'loglevel';

export function initLogger(isEnvDevelopment: boolean) {
    if (isEnvDevelopment) {
        setLevel(levels.DEBUG);
    } else {
        disableAll();
    }
}

function error<E extends unknown>(err: E, extras?: Record<string, any>) {
    loglevelError(err);

    if (extras) {
        setExtras(extras);
    }

    captureException(err);
}

export const logger = {
    warn,
    info,
    debug,
    trace,
    error,
} as const;
