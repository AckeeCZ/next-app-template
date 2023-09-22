const { createLokseConfig } = require('../../packages/localization/lokse/index.cjs');

const { languages } = require('./src/modules/intl/config/langs.cjs');

module.exports = createLokseConfig({
    sheets: [],
    languages: Object.values(languages),
});
