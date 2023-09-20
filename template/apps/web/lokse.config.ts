import { createLokseConfig } from '@workspace/localization/lokse';

import { languages } from './src/modules/intl/config/langs.mjs';

// FIXME: test yarn lokse
export default createLokseConfig({
    sheets: [],
    languages: Object.values(languages),
});
