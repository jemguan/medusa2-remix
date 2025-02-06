FROM node:20-alpine AS base

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY . .

# Install dependencies
RUN yarn install

# Build the app
RUN yarn build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app .

ENV PORT=80
ENV NODE_ENV=production

USER node

CMD ["yarn", "start:prod"]