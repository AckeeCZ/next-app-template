import { createIntl } from './components/Intl';
import { createUseLang } from './hooks/useLang';
import { createUseTranslations } from './hooks/useTranslations';
import { createIsMessageKey, CreateTranslations, type StringKeys } from './types';

export function createLocalizationModule<
    Lang extends StringKeys<Translations>,
    Translations extends CreateTranslations<Lang>,
>({ translations, defaultLocale }: { translations: Translations; defaultLocale: Lang }) {
    const useLang = createUseLang<Lang>(defaultLocale);

    const isMessageKey = createIsMessageKey(translations[defaultLocale]);
    const useTranslations = createUseTranslations<Lang, Translations, typeof useLang>(translations, useLang);

    return {
        Intl: createIntl(useTranslations),
        useTranslations,
        useLang,
        isMessageKey,
    } as const;
}

export { isFormattedMessageValues } from './types';
export type { FormattedMessageProps } from './types';
export * from './utils';
