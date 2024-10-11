import { useLocale } from './useLocale';

/**
 * Parse locale that can be in `en-US` or `en` format
 * and return the first part the lang part, not country part.
 */
export function useLang() {
    const locale = useLocale();

    return locale.lang;
}
