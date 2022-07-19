import type { LokseConfig } from 'lokse';
import { Languages } from './src/modules/intl/config';

const config: LokseConfig = {
    sheetId: '1q8MSZGQqsWzo6zdme3ChwuWF7EdXMAyeZWSrgwOp-YQ',
    dir: 'src/translations',
    languages: Object.values(Languages),
    column: 'key_web',
    plugins: ['@lokse/plugin-prettier'],
};

export default config;
