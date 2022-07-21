import * as consts from 'constants/index';
import { theme } from 'styles/theme';

import plugins from './plugins';
import enhancers from './enhancers';

export const rendererConfig = {
    devMode: consts.isEnvDevelopment,
    enhancers,
    plugins,
    theme,
};

// export const staticCSS = [resets, vendors];
