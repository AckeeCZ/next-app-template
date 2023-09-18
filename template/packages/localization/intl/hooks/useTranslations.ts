import { useRouter } from "next/router";

import type { GeneralTranslations, StringKeys } from "../types";

export const useTranslations = <Translations extends GeneralTranslations>(
  translations: Translations,
  defaultLocale: StringKeys<Translations>,
) => {
  const { locale } = useRouter();
  const lang =
    locale && Object.keys(translations).includes(locale)
      ? locale
      : defaultLocale;
  const messages = translations[lang];

  return [lang, messages] as const;
};
