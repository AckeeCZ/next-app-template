import { captureException, setExtras } from '@sentry/browser';
import { getLogger } from 'loglevel';

export function createLogger(
    name: string,
    props: {
        outputToConsole: boolean;
    },
    acceptenceErrorFilter: <E extends unknown>(err: E) => boolean = () => true,
) {
    const logger = getLogger(name);

    if (props.outputToConsole) {
        logger.enableAll(true);
    } else {
        logger.disableAll();
    }

    return {
        ...logger,
        error<E extends unknown>(err: E, extras?: Record<string, any>) {
            logger.error(err);

            if (acceptenceErrorFilter<E>(err)) {
                if (extras) {
                    setExtras(extras);
                }

                captureException(err);
            }
        },
    };
}
