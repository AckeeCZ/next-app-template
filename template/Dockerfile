# Install dependencies only when needed
FROM node:18.12 AS deps

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:18.12 AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
ARG NEXT_PUBLIC_BUILD_ENV
RUN yarn build && yarn install --production --ignore-scripts --prefer-offline

# Production image, copy all the files and run next
FROM node:18.12 AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --gid 1001 nodejs
RUN useradd nextjs -u 1001 --gid 1001

# You only need to copy next.config.js if you are NOT using the default configuration
# COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/.env.jsonc ./.env.jsonc

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
# NOT FULLY ADOPTED IN THE PROJECT YET
# COPY --from=builder --chown=nextjs:nodejs /app/.env ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
# ENV NEXT_TELEMETRY_DISABLED 1
ENV CFG_JSON_PATH="/config/secrets.json"

CMD ["node", "server.js"]
