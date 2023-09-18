import { IntlProvider } from "react-intl";

import { useTranslations } from "../hooks/useTranslations";
import type { GeneralTranslations, StringKeys } from "../types";

export interface IntlProps {
  children: React.ReactNode;
}

export function createIntl<Translations extends GeneralTranslations>(
  translations: Translations,
  defaultLocale: StringKeys<Translations>,
) {
  const Intl = ({ children }: IntlProps) => {
    const [lang, messages] = useTranslations(translations, defaultLocale);

    return (
      // @ts-expect-error
      <IntlProvider locale={lang} messages={messages}>
        {children}
      </IntlProvider>
    );
  };

  return Intl;
}
