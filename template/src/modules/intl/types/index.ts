import type { FormattedMessage } from 'react-intl';
import type { ComponentProps } from 'react';

import type { translations } from '~translations';
import type { ValuesOf } from '~types/utils';

import type { languages } from '../config';

export type FormattedMessageProps = ComponentProps<typeof FormattedMessage>;

export type Language = ValuesOf<typeof languages>;

export type MessageKey = keyof (typeof translations)['en'];

declare global {
    namespace FormatjsIntl {
        interface Message {
            ids: MessageKey;
        }

        interface IntlConfig {
            locale: Language;
        }
    }
}
