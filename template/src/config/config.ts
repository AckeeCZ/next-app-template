import merge from 'lodash/merge';

import { currentEnv } from '~constants';

import type { EnvConfig } from './config.development';

const envConfig = require(`./config.${currentEnv}.ts`).default;

const defaultConfig = {} as const;

type DefaultConfig = typeof defaultConfig;

export type Config = DefaultConfig & EnvConfig;

const appConfig: Config = merge(defaultConfig, envConfig);

export { appConfig };
