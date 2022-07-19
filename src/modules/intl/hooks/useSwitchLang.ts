import { useMemo } from 'react';
import { useRouter } from 'next/router';
import type { MessageFormatElement } from 'react-intl';

import { cs } from 'translations';
import type { MessageKey } from 'translations';

import { Languages } from '../config';

const useSwitchLang = (): [string, Record<MessageKey, string> | Record<MessageKey, MessageFormatElement[]>] => {
    const { locale } = useRouter();

    const shortLocale = locale || Languages.CS;

    const messages = useMemo(() => {
        switch (shortLocale) {
            case Languages.CS:
                return cs;
            default:
                return cs;
        }
    }, [shortLocale]);

    return [shortLocale, messages];
};

export default useSwitchLang;
