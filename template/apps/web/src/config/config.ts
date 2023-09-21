import { assign } from 'radash';

import { buildEnv } from '../constants';
import type { EnvConfig } from './config.development';

const envConfig = require(`./config.${buildEnv}.ts`).default;

const defaultConfig = {} as const;

type DefaultConfig = typeof defaultConfig;

export type Config = DefaultConfig & EnvConfig;

const appConfig: Config = assign(defaultConfig, envConfig);

export { appConfig };
