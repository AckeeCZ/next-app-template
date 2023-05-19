import { useRouter } from 'next/router';
import { useMemo } from 'react';
import type { MessageFormatElement } from 'react-intl';

import type { MessageKey } from 'translations';
import { cs } from 'translations';

import { languages } from '../config';
import type { Language } from '../types';

const useSwitchLang = (): [Language, Record<MessageKey, string> | Record<MessageKey, MessageFormatElement[]>] => {
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

export default useSwitchLang;
