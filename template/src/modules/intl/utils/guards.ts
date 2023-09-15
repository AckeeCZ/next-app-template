import type { IntlShape } from 'react-intl';

import { translations } from '~translations';

import { defaultLocale } from '../config/index';
import type { FormattedMessageProps, MessageKey } from '../types';

export function isFormattedMessageValues(obj: any): obj is Parameters<IntlShape['formatMessage']>[1] {
    return obj && typeof obj === 'object';
}

export const isMessageKey = (key?: any): key is MessageKey => {
    if (!key || typeof key !== 'string') {
        return false;
    }

    return typeof translations[defaultLocale][key as MessageKey] === 'string';
};

export function isFormattedMessageProps(obj: any): obj is FormattedMessageProps {
    return obj && isMessageKey(obj.id);
}
