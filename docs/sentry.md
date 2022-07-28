# Sentry

Sentry is already added according to the [official Sentry in Next.js guide](https://docs.sentry.io/platforms/javascript/guides/nextjs/).

## 🔑 Fill up your project DSN

There are two configs `sentry.client.config.js` and `sentry.server.config.js`. Both requires DNS to be filled or supplied by `SENTRY_DSN` respectively `NEXT_PUBLIC_SENTRY_DSN` env variable in build / runtime.

Once you're don, all unhandled app errors are sent to the Sentry.

## 🚧 Add error boundary

Errors are captured and sent to the Sentry, but app is still gonna break. To handle it and display crash screen rather than broken web to the user, use [Sentry Error Boundary](https://docs.sentry.io/platforms/javascript/guides/react/components/errorboundary).

## 🧭 Source maps

If you want to generate and upload source maps and create release in Sentry, fill up `sentry.properties` and `.sentryclirc` configs as [described here](https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-configuration-files).
