// @ts-check
/** @typedef {import('lokse').LokseConfig} LokseConfig */

/**
 *
 * @param partialConfig {Partial<LokseConfig>}
 * @returns {LokseConfig}
 */
exports.createLokseConfig = partialConfig => {
    return {
        sheetId: '__TODO__',
        dir: 'src/translations',
        column: 'key_web',
        splitTranslations: true,
        ...partialConfig,
    };
};
