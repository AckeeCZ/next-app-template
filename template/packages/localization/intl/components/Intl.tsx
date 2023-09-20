import { IntlProvider } from 'react-intl';

import { createUseTranslations } from '../hooks/useTranslations';

export interface IntlProps {
    children: React.ReactNode;
}

export function createIntl<UseTranslations extends ReturnType<typeof createUseTranslations>>(
    useTranslations: UseTranslations,
) {
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
