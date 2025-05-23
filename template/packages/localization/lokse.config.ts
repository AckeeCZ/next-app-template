import { createLokseConfig } from '@tooling/lokse/config';
import type { Split } from 'type-fest';

export const locales = {
    EN: 'en-US',
    CS: 'cs-CZ',
} as const;

type LanguageKeys = keyof typeof locales;
type Languages = {
    [key in LanguageKeys]: Split<(typeof locales)[key], '-'>[0];
};

export const languages = Object.entries(locales).reduce((acc, [key, value]) => {
    // @ts-expect-error Languages typing is enough
    acc[key] = value.split('-')[0];

    return acc;
}, {} as Languages);

export const defaultLocale = locales.EN;

export default createLokseConfig({
    languages: Object.values(languages),
});
