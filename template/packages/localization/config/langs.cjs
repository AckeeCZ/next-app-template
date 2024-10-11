const locales = Object.freeze({
    EN: 'en-US',
    CS: 'cs-CZ',
});

/**
 * @type {{ [key in keyof typeof locales]: import('type-fest').Split<(typeof locales)[key], '-'>[0]}
 */
const languages = Object.entries(locales).reduce((acc, [key, value]) => {
    acc[key] = value.split('-')[0];

    return acc;
}, {});

const defaultLocale = locales.EN;

module.exports = { locales, defaultLocale, languages };
