/**
 * - Run `yarn localize` to generate translation files.
 * - Run `yarn lokse` to open the spreashet with translations.
 * - Export here all translations for the app. 🌐
 * - All the rest please place to the `modules/intl`. 🙌
 */
import type { Language } from '../modules/intl/types';
import cs from './all.cs';
import en from './all.en';

export const translations = {
    en,
    cs,
} as const satisfies Record<Language, Record<string, string>>;
