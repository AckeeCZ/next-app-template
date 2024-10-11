import { env } from '@workspace/env';
import { createLogger } from '@workspace/logger';

export const logger = createLogger('app', {
    outputToConsole: env.NEXT_PUBLIC_NODE_ENV !== 'production',
});
