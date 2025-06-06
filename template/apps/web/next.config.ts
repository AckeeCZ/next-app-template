/* eslint-disable no-console */
import path from 'path';
import { withSentryConfig } from '@sentry/nextjs';
import { config } from 'dotenv';
import type { dependencies } from 'package.json';

import { defaultLocale, locales } from '@workspace/localization';

import { env } from '@workspace/env';

import type { NextConfig } from 'next';

config({
    path: '.env.local',
});

type Dependency = keyof typeof dependencies;

const nextConfig: NextConfig = {
    reactStrictMode: true,

    output: 'standalone',
    outputFileTracingRoot: path.join(__dirname, '../../'),

    i18n: {
        locales: Object.values(locales),
        defaultLocale,
    },

    transpilePackages: [] satisfies Dependency[],

    poweredByHeader: false,

    headers: async () => [
        {
            source: '/:path*',
            headers: [
                {
                    /**
                     * Forbids any foreign site to load your site in iframe, frame, object, or embed HTML elements.
                     * - Prevents clickjacking type of attack.
                     * - 'DENY' - No one can embed your site in an iframe.
                     * - 'SAMEORIGIN' - Only your site can embed your site in an iframe.
                     */
                    key: 'X-Frame-Options',
                    value: 'DENY',
                },
                {
                    key: 'Cross-Origin-Embedder-Policy',
                    /**
                     * Cross-origin resource loading will be blocked by COEP unless:
                     *  - The resource is requested in no-cors mode and the response includes a Cross-Origin-Resource-Policy header that allows it to be loaded into the document origin.
                     *  - The resource is requested in cors mode and the resource supports and is permitted by CORS. (e.g. by using the crossorigin attribute, or in JavaScript by making a request with {mode="cors"}).    
                     */
                    value: 'require-corp',
                },
                {
                    key: 'Cross-Origin-Opener-Policy',
                    /**
                     * Sets `window.opener` to `null` for all outbound links.
                     */
                    value: 'same-origin',
                },
                {
                    /**
                     * Tells the server any insecure HTTP resources to be automatically upgraded to HTTPS if possible.
                     */
                    key: 'Upgrade-Insecure-Requests',
                    value: '1',
                },
                {
                    /**
                     * Tells browser which features / APIs to disallow for given origin to mitigate potential security attacks.
                     */
                    key: 'Permissions-Policy',
                    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), midi=(), magnetometer=(), gyroscope=(), fullscreen=()',
                },
                {
                    /**
                     * Prevents the browser from trying to guess the MIME type of a file
                     * and instead forces it to use the one provided by the server.
                     */
                    key: 'X-Content-Type-Options',
                    value: 'nosniff',
                },
                {
                    // Should be the Referer HTTP response header included, in which form, and when?
                    key: 'Referrer-Policy',
                    /**
                     * 'no-referrer': the most restrictive; omits the header from response; might hurt site’s analytics.
                     * 'strict-origin-when-cross-origin': 
                     *   - same origin: full URL
                     *   - cross-origin: origin-only for same security level (HTTPS → HTTPS)
                     *   - none: for HTTPS → HTTP
                     */
                    value: 'strict-origin-when-cross-origin',
                },
                {
                    // Forces the browser to use HTTPS for all requests
                    key: 'Strict-Transport-Security',
                    value: 'max-age=63072000; includeSubDomains; preload',
                },
                {
                    key: 'Content-Security-Policy',
                    value: [
                        // Default directive allows resources to be loaded only from the same origin
                        `default-src 'self'`,

                        // Allows fetch/xhr requests to the same origin and Google APIs
                        `connect-src 'self' https://*.googleapis.com ${new URL(env.NEXT_PUBLIC_SENTRY_REPORT_URI).origin}`,

                        // Allows images to be loaded from the same origin and Google APIs, and data URIs
                        `img-src 'self' https://www.google.com data:`,

                        // Allows web/serviec workers to be loaded from the same origin and blob URIs
                        `worker-src 'self' blob:`,


                        // Forbids your site to be embedded in an iframe, frame, object, or embed HTML elements 
                        `frame-ancestors 'none'`,

                        // FIXME: use `once` instead of `unsafe-inline` for inline scripts
                        // For local server only:
                        ...(process.env.NODE_ENV === 'development'
                            ? [`style-src 'self' 'unsafe-inline'`, `style-src-elem 'self' 'unsafe-inline'`]
                            // Allows inline styles (using 'nonce' instead of 'unsafe-inline' would be more secure)
                            : [`style-src 'self' 'unsafe-inline'`]),

                        // Forces HTTPS for all requests
                        'upgrade-insecure-requests',

                        // Reports any CSP violations to Sentry (deprecated reporting API, only for backward compatibility)
                        `report-uri ${env.NEXT_PUBLIC_SENTRY_REPORT_URI}`,

                        // Reports any CSP violations to Sentry (modern reporting API)
                        'report-to csp-endpoint',
                    ]
                        .filter(Boolean)
                        .join('; '),
                },
                {
                    // Reports any CSP violations to Sentry (this header has been deprecated, only for backward compatibility)
                    key: 'Report-To',
                    value: `Report-To: ${JSON.stringify({
                        group: 'csp-endpoint',
                        max_age: 10886400,
                        endpoints: [
                            {
                                url: `${env.NEXT_PUBLIC_SENTRY_REPORT_URI}`,
                            },
                        ],
                        include_subdomains: true,
                    })}`,
                },
                {
                    // Reports any CSP violations to Sentry (modern reporting API)
                    key: 'Reporting-Endpoints',
                    value: `csp-endpoint="${env.NEXT_PUBLIC_SENTRY_REPORT_URI}"`,
                },
            ],
        },
    ],
};

if (!env.NEXT_PUBLIC_DEV_SENTRY_DISABLED) {
    console.log('Sentry is enabled');
    console.log('Sentry organization:', process.env.SENTRY_ORG);
    console.log('Sentry project:', process.env.SENTRY_PROJECT);
    console.log('Sentry auth token is defined:', process.env.SENTRY_AUTH_TOKEN !== undefined);
}

// Make sure adding Sentry options is the last code to run before exporting, to
// ensure that your source maps include changes from all other Webpack plugins
export default env.NEXT_PUBLIC_DEV_SENTRY_DISABLED === true
    ? nextConfig
    : withSentryConfig(nextConfig, {
          // For all available options, see:
          // https://github.com/getsentry/sentry-webpack-plugin#options

          org: process.env.SENTRY_ORG,
          project: process.env.SENTRY_PROJECT,
          authToken: process.env.SENTRY_AUTH_TOKEN,

          // Only print logs for uploading source maps in CI
          silent: !process.env.CI,

          // For all available options, see:
          // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

          // Upload a larger set of source maps for prettier stack traces (increases build time)
          widenClientFileUpload: true,

          // Automatically annotate React components to show their full name in breadcrumbs and session replay
          reactComponentAnnotation: {
              enabled: true,
          },

          // Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
          // This can increase your server load as well as your hosting bill.
          // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
          // side errors will fail.
          // tunnelRoute: "/monitoring",

          // Hides source maps from generated client bundles
        //   hideSourceMaps: true,

          // Automatically tree-shake Sentry logger statements to reduce bundle size
          disableLogger: true,

          // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
          // See the following for more information:
          // https://docs.sentry.io/product/crons/
          // https://vercel.com/docs/cron-jobs
          automaticVercelMonitors: true,

          telemetry: false,
      });
