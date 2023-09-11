import { IntlProvider } from 'react-intl';
import React from 'react';

import useSwitchLang from '../hooks/useSwitchLang';

interface IntlProps {
    children: React.ReactNode;
}

export const Intl = ({ children }: IntlProps) => {
    const [locale, messages] = useSwitchLang();

    return (
        <IntlProvider locale={locale} messages={messages}>
            {children}
        </IntlProvider>
    );
};
