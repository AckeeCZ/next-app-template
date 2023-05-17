'use client';

import { useMemo } from 'react';
import type { MessageFormatElement } from 'react-intl';

import type { MessageKey } from 'translations';
import { cs } from 'translations';

import { Languages } from '../config';
import type { Locale as LocaleType } from '../types';
import { Locale } from '../types';

const useSwitchLang = (): [LocaleType, Record<MessageKey, string> | Record<MessageKey, MessageFormatElement[]>] => {
    const locale = 'cs';

    const shortLocale: LocaleType = (locale as LocaleType) || Locale.CS;

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
