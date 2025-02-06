FROM node:20-alpine AS base

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY . .

# Install dependencies
RUN yarn install --frozen-lockfile

# Build the app
WORKDIR /app/apps/medusa
RUN yarn medusa-admin build && \
    yarn tsc -p tsconfig.json

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/apps/medusa ./apps/medusa

WORKDIR /app/apps/medusa

ENV PORT=80
ENV NODE_ENV=production

USER node

CMD ["yarn", "start:prod"]