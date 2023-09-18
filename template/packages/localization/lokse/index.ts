import type { LokseConfig } from 'lokse';

export const createLokseConfig = (partialConfig: Partial<LokseConfig>): LokseConfig => {
    const config: LokseConfig = {
        sheetId: '',
        dir: 'src/translations',
        column: 'key_web',
        plugins: ['@lokse/plugin-prettier'],
        splitTranslations: true,
        ...partialConfig,
    };

    return config;
};
