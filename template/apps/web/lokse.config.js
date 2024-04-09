const { createLokseConfig } = require('@tooling/lokse/config');

const { languages } = require('./src/modules/intl/config/langs.cjs');

module.exports = createLokseConfig({
    sheets: ['All'],
    languages: Object.values(languages),
});
