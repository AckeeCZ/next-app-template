// run `yarn localize` to generate translation files

import type { Language } from '~modules/intl/types';

// import cs from './cs.json';
const cs = {};

export type MessageKey = keyof typeof cs;

declare global {
    namespace FormatjsIntl {
        interface Message {
            ids: MessageKey;
        }

        interface IntlConfig {
            locale: Language;
        }
    }
}

export { cs };
