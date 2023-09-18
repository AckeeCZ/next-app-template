import { createLocalizationModule, type FormattedMessageProps } from '@workspace/localization/intl';
import { translations } from '~translations';

import type { Language, Translations } from '../types';
import { languages } from './langs';

export const { Intl, isMessageKey, useLang } = createLocalizationModule<Translations, Language>({
    defaultLocale: languages.EN,
    translations,
});

export function isFormattedMessageProps(obj: any): obj is FormattedMessageProps {
    return obj && isMessageKey(obj.id);
}
