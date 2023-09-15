import { translations } from '../../../translations';
import { useLang } from './useLang';

export const useTranslations = () => {
    const lang = useLang();
    const messages = translations[lang];

    return [lang, messages] as const;
};
