import type { ComponentProps } from 'react';
import type { FormattedMessage, IntlShape } from 'react-intl';

export type FormattedMessageProps = ComponentProps<typeof FormattedMessage>;

export function isFormattedMessageValues(obj: any): obj is Parameters<IntlShape['formatMessage']>[1] {
    return obj && typeof obj === 'object';
}

export const createIsMessageKey =
    <Translations extends Record<string, string>>(translations: Translations) =>
    (key: string | number | symbol): key is keyof Translations =>
        translations.hasOwnProperty(key);

export type GeneralTranslations = Record<string, Record<string, string>>;

export type CreateTranslations<Lang extends string> = Record<Lang, Record<string, string>>;

export type StringKeys<T> = Extract<keyof T, string>;
