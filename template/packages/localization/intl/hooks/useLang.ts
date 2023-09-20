import { useRouter } from 'next/router';

/**
 * Parse locale that can be in `en-US` or `en` format
 * and return the first part the lang part, not country part.
 */
export function createUseLang<Lang extends string>(defaultLocale: Lang) {
    return function useLang() {
        const { locale, locales = [] } = useRouter();

        const lang = (locale && locales.includes(locale) ? locale : defaultLocale) as Lang;

        return lang;
    };
}

export type CreateUseLang<Lang extends string> = ReturnType<typeof createUseLang<Lang>>;
