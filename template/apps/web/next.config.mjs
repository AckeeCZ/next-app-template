import { withSentryConfig } from '@sentry/nextjs';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

import './src/env/env.mjs';

import { defaultLocale, languages } from './src/modules/intl/config/langs.cjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,

    i18n: {
        locales: Object.values(languages),
        defaultLocale,
        localeDetection: true,
    },

    // https://dev.to/chromygabor/add-typescript-type-check-to-next-js-2nbb
    webpack(config, options) {
        // Do not run type checking twice:
        if (options.dev && options.isServer) {
            config.plugins.push(new ForkTsCheckerWebpackPlugin());
        }

        return config;
    },

    transpilePackages: ['@workspace/ui'],
};

const sentryWebpackPluginOptions = {
    // Additional config options for the Sentry Webpack plugin. Keep in mind that
    // the following options are set automatically, and overriding them is not
    // recommended:
    //   release, url, org, project, authToken, configFile, stripPrefix,
    //   urlPrefix, include, ignore

    silent: true, // Suppresses all logs

    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options.
    dryRun: process.env.NODE_ENV !== 'production',

    authToken: process.env.NEXT_PUBLIC_SENTRY_AUTH_TOKEN,
};

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
export default withSentryConfig(nextConfig, sentryWebpackPluginOptions);
