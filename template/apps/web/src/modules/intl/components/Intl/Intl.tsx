import { IntlProvider } from '@workspace/localization';

import { useTranslations } from '../../hooks/useTranslations';

export interface IntlProps {
    children: React.ReactNode | React.ReactNode[];
}

export const Intl = ({ children }: IntlProps) => {
    const [locale, messages] = useTranslations();

    return (
        <IntlProvider locale={locale} messages={messages}>
            <>{children}</>
        </IntlProvider>
    );
};
