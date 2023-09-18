import { config as ackeeConfig } from '@ackee/prettier-config';


/** @typedef  {import("prettier").Config} PrettierConfig */
/** @typedef  {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */

/** @type { PrettierConfig | SortImportsConfig } */
const config = {
    ...ackeeConfig,
    importOrder: [
        "^(react/(.*)$)|^(react$)|^(react-native(.*)$)",
        "^(next/(.*)$)|^(next$)",
        "<THIRD_PARTY_MODULES>",
        "",
        "^@workspace/(.*)$",
        "",
        "^~/",
        "",
        "^~/",
        "^[../]",
        "^[./]",
    ],
};
export default  config