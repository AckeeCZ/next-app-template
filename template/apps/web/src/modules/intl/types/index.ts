import type { ValuesOf } from '@workspace/ts-utils';

import { translations } from '~translations';

import type { languages } from '../config';

export type Translations = typeof translations;

export type Language = ValuesOf<typeof languages>;

export type MessageKey = keyof (typeof translations)['en'];

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
