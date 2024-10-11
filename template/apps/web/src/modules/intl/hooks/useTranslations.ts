import { translations } from '@workspace/localization';

import { useLang } from './useLang';

export function useTranslations() {
    const lang = useLang();
    const messages = translations[lang];

    return [lang, messages] as const;
}
