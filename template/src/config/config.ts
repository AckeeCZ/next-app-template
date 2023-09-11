import merge from 'lodash/merge';

import { currentEnv } from '~constants';

import type { EnvConfig } from './config.development';

const envConfig = require(`./config.${currentEnv}.ts`).default;

const defaultConfig = {
    appName: process.env.NEXT_PUBLIC_NAME,
    routes: {
        home: '/',
    },
    endpoints: {
        testData: '/recipes',
    },
} as const;

type DefaultConfig = typeof defaultConfig;

export type Config = DefaultConfig & EnvConfig;

export const config: Config = merge(defaultConfig, envConfig);
