import { useMemo } from 'react';
import { useRouter } from 'next/router';

import { defaultLocale, type Locale, type Locales } from '@workspace/localization';

/**
 * Parse locale that can be in `en-US` or `en` format
 * and return the first part the lang part, not country part.
 */
export function useLocale() {
    const { locale, locales = [] } = useRouter();

    const parsedLocale = (locale && locales.includes(locale) ? locale : defaultLocale) as Locale;

    return useMemo(() => {
        const [lang, region] = parsedLocale.split('-');

        return {
            lang,
            region,
        } as const as Readonly<{
            lang: Locales[0];
            region: Locales[1];
        }>;
    }, [parsedLocale]);
}
