import { config as ackeeConfig, generateImportOrder } from '@ackee/prettier-config';

/** @type {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} */
const config = {
    ...ackeeConfig,
    importOrder: generateImportOrder([
        ['^(react/(.*)$)|^(react$)|^(react-native(.*)$)', '^(next/(.*)$)|^(next$)', '<THIRD_PARTY_MODULES>'],
        ['^@workspace/(.*)$'],
        ['^~(.*)$'],
        ['^[../]', '^[./]'],
    ]),
};
export default config;
