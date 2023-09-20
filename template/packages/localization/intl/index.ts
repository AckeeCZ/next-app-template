import { createIntl } from './components/Intl';
import { createUseLang } from './hooks/useLang';
import { createIsMessageKey, type GeneralTranslations, type StringKeys } from './types';

export function createLocalizationModule<
    Translations extends GeneralTranslations,
    Lang extends StringKeys<Translations>,
>({ translations, defaultLocale }: { translations: Translations; defaultLocale: Lang }) {
    const useLang = createUseLang(defaultLocale);

    const isMessageKey = createIsMessageKey(translations[defaultLocale]);

    const Intl = createIntl(translations, defaultLocale);

    return {
        Intl,
        useLang,
        isMessageKey,
    } as const;
}

export * from './hooks/useLang';
export { isFormattedMessageValues } from './types';
export type { FormattedMessageProps } from './types';
export * from './utils';
