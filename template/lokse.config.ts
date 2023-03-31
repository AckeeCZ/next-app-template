import type { LokseConfig } from 'lokse';
import { Languages } from './src/modules/intl/config';

const config: LokseConfig = {
    sheetId: '',
    dir: 'src/translations',
    languages: Object.values(Languages),
    column: 'key_web',
    // sheets: [],
    plugins: ['@lokse/plugin-prettier'],
};

export default config;
