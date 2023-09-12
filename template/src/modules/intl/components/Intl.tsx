import { IntlProvider } from 'react-intl';
import React from 'react';

import { useTranslations } from '../hooks';

export interface IntlProps {
    children: React.ReactNode;
}

export const Intl = ({ children }: IntlProps) => {
    const [lang, messages] = useTranslations();

    return (
        <IntlProvider locale={lang} messages={messages}>
            {children}
        </IntlProvider>
    );
};
