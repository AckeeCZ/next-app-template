import type { FormattedMessage, IntlShape } from 'react-intl';
import type { ComponentProps } from 'react';

import * as translations from '~translations';
import type { ValuesOf } from '~types/utils';

import type { languages } from '../config';

export type FormattedMessageProps = ComponentProps<typeof FormattedMessage>;

export function isFormattedMessageValues(obj: any): obj is Parameters<IntlShape['formatMessage']>[1] {
    return obj && typeof obj === 'object';
}

export const isMessageKey = (key: string | number | symbol): key is keyof Translations =>
    translations.hasOwnProperty(key);

export function isFormattedMessageProps(obj: any): obj is FormattedMessageProps {
    return obj && isMessageKey(obj.id);
}

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
