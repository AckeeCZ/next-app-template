import { createLocalizationModule, type FormattedMessageProps } from '@workspace/localization/intl';

import { translations } from '~translations';

import type { Language, Translations } from '../types';
import { defaultLocale } from './langs';

export const { Intl, isMessageKey, useLang, useTranslations } = createLocalizationModule<Language, Translations>({
    defaultLocale,
    translations,
});

export function isFormattedMessageProps(obj: any): obj is FormattedMessageProps {
    return obj && isMessageKey(obj.id);
}
