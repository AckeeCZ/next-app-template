import type { LokseConfig } from 'lokse';

import { languages } from './src/modules/intl/config';

const config: LokseConfig = {
    sheetId: '',
    dir: 'src/translations',
    languages: Object.values(languages),
    column: 'key_web',
    // TODO: Fill concrete sheet's names
    sheets: [],
    plugins: ['@lokse/plugin-prettier'],
};

export default config;
