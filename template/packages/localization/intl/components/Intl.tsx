import { IntlProvider } from 'react-intl';

import type { CreateUseTranslations } from '../hooks/useTranslations';

export interface IntlProps {
    children: React.ReactNode;
}

export function createIntl<UseTranslations extends CreateUseTranslations>(useTranslations: UseTranslations) {
    const Intl = ({ children }: IntlProps) => {
        const [lang, messages] = useTranslations();

        return (
            // @ts-expect-error
            <IntlProvider locale={lang} messages={messages}>
                {children}
            </IntlProvider>
        );
    };

    return Intl;
}
