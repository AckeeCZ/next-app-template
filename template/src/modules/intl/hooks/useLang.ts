import { useRouter } from 'next/router';

import { defaultLocale } from '../config';
import { Language } from '../types';

/**
 * Parse locale that can be in `en-US` or `en` format
 * and return the first part the lang part, not country part.
 */
export function useLang() {
    const { locale, locales = [] } = useRouter();

    const lang = (locale && locales.includes(locale) ? locale : defaultLocale) as Language;

    return lang;
}
