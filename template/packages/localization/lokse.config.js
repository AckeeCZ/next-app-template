const { createLokseConfig } = require('@tooling/lokse/config');
const { languages } = require('./config/langs.cjs');

module.exports = createLokseConfig({
    sheets: ['All'],
    languages: Object.values(languages),
});

