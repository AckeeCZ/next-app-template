import type { CreateTranslations } from '../types';
import type { CreateUseLang } from './useLang';

export const createUseTranslations = <
    Lang extends string,
    Translations extends CreateTranslations<Lang>,
    UseLang extends CreateUseLang<Lang>,
>(
    translations: Translations,
    useLang: UseLang,
) => {
    return function useTranslations() {
        const lang = useLang();
        const messages = translations[lang];

        return [lang, messages] as const;
    };
};

export type CreateUseTranslations<
    Lang extends string = string,
    Translations extends CreateTranslations<Lang> = CreateTranslations<Lang>,
    UseLang extends CreateUseLang<Lang> = CreateUseLang<Lang>,
> = ReturnType<typeof createUseTranslations<Lang, Translations, UseLang>>;
