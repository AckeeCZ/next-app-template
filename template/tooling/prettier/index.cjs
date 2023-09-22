const { config: ackeeConfig, generateImportOrder } = require('@ackee/prettier-config');

/** @type {import("@ianvs/prettier-plugin-sort-imports").PrettierConfig} */
const config = {
    ...ackeeConfig,
    importOrder: generateImportOrder([
        ['^(react/(.*)$)|^(react$)|^(react-native(.*)$)', '^(next/(.*)$)|^(next$)', '<THIRD_PARTY_MODULES>'],
        ['^@workspace/(.*)$'],
        ['^~(.*)$'],
        ['^[../]', '^[./]'],
    ]),
};

module.exports = config;
