import type { MessageFormatElement } from 'react-intl';
import { useMemo } from 'react';
import { useRouter } from 'next/router';

import { cs, type MessageKey } from '~translations';

import { languages } from '../config';
import type { Language } from '../types';

export const useSwitchLang = (): [
    Language,
    Record<MessageKey, string> | Record<MessageKey, MessageFormatElement[]>,
] => {
    const { locale } = useRouter();

    const lang: Language = (locale as Language) || languages.CS;

    const messages = useMemo(() => {
        switch (lang) {
            case languages.CS:
                return cs;
            default:
                return cs;
        }
    }, [lang]);

    return [lang, messages];
};
