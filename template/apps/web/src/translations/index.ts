/**
 * - Run `yarn localize` to generate translation files.
 * - Run `yarn lokse` to open the spreashet with translations.
 * - Export here all translations for the app. 🌐
 * - All the rest please place to the `modules/intl`. 🙌
 */
import type { Language } from '../modules/intl/types';
import en from './en.mock.json';

export const translations = {
    en,
} satisfies Record<Language, Record<string, string>>;
