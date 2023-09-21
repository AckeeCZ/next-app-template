const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    // https://dev.to/chromygabor/add-typescript-type-check-to-next-js-2nbb
    webpack(config, options) {
        // Do not run type checking twice:
        if (options.dev && options.isServer) {
            config.plugins.push(new ForkTsCheckerWebpackPlugin());
        }

        return config;
    },
};

module.exports = nextConfig;
