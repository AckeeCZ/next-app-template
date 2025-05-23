/**
 * - Run `yarn localize` to generate translation files.
 * - Run `yarn lokse` to open the spreashet with translations.
 * - Export here all translations for the app. 🌐
 * - All the rest please place to the `modules/intl`. 🙌
 */

import { languages } from '../lokse.config';
import type { Language } from '../types';
import cs from './all.cs';
import en from './all.en';

export const translations = {
    [languages.EN]: en,
    [languages.CS]: cs,
} as const satisfies Record<Language, Record<keyof typeof en | keyof typeof cs, string>>;
