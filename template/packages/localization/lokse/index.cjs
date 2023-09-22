/** @typedef {import('lokse').LokseConfig} LokseConfig */

/**
 *
 * @param partialConfig {Partial<LokseConfig>}
 * @returns {LokseConfig}
 */
const createLokseConfig = partialConfig => {
    return {
        sheetId: '',
        dir: 'src/translations',
        column: 'key_web',
        plugins: ['@lokse/plugin-prettier'],
        splitTranslations: true,
        ...partialConfig,
    };
};

module.exports = { createLokseConfig };
