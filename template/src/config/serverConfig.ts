import { createLoader, values, safeValues } from 'configuru';

console.log(`Loading the server configuration from ${process.env.CFG_JSON_PATH}`);

const loader = createLoader({
    defaultConfigPath: '.env.jsonc',
});

export const serverConfig = values({
    // TODO: Add your server configuration here
    myEnvVar: loader.string('MY_ENV_VAR'),
});

const safeServerConfig = safeValues(serverConfig);

console.log('Server configuration', safeServerConfig);
