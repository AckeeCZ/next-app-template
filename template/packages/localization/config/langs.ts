export const locales = {
    EN: 'en-US',
    CS: 'cs-CZ',
} as const;

/**
 * @type {{ [key in keyof typeof locales]: import('type-fest').Split<(typeof locales)[key], '-'>[0]}
 */
export const languages = Object.entries(locales).reduce(
    (acc, [key, value]) => {
        acc[key as keyof typeof locales] = value.split('-')[0];

        return acc;
    },
    {} as Record<keyof typeof locales, string>,
);

export const defaultLocale = locales.EN;
