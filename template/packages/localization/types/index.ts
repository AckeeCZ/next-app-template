import type { ComponentProps } from 'react';
import type { FormattedMessage, IntlShape } from 'react-intl';
import type { Split } from 'type-fest';

import type { ValuesOf } from '@workspace/common/types';

import { languages, locales } from '../lokse.config';
import { translations } from '../translations';

export type Language = ValuesOf<typeof languages>;

export type MessageKey = keyof (typeof translations)[Language];

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

export type Translations = typeof translations;

export type Locale = ValuesOf<typeof locales>;

export type Locales = Split<Locale, '-'>;

export const isMessageKey = (key: string | number | symbol): key is keyof Translations[Language] =>
    Object.values(languages).every(lang => Object.hasOwn(translations[lang], key));

export type FormattedMessageProps = ComponentProps<typeof FormattedMessage>;

export function isFormattedMessageProps(obj: any): obj is FormattedMessageProps {
    return obj && typeof obj === 'object' && isMessageKey(obj.id);
}

export function isFormattedMessageValues(obj: any): obj is Parameters<IntlShape['formatMessage']>[1] {
    return obj && typeof obj === 'object';
}

export * from 'react-intl';
