/**
 * Format date based on user's region rather than user's language.
 * Meaning prefer the date format he is used to and has chosen in browser settings.
 *
 * AVAIL. ONLY ON CLIENT-SIDE! (depends on navigator.language)
 */

export function toLocalDateFormat(date: string | number | Date) {
    const dateTimeFormatter = new Intl.DateTimeFormat(navigator.language, {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    });

    return date ? dateTimeFormatter.format(new Date(date)) : '';
}
