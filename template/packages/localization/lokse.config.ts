import { createLokseConfig } from '@tooling/lokse/config';

import { languages } from './config/langs.cjs';

export default createLokseConfig({
    sheets: ['All'],
    languages: Object.values(languages),
});
