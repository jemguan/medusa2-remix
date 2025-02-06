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

ENV PORT=9000
ENV NODE_ENV=production

# 确保 S3 环境变量在容器中可用
ENV S3_URL=${S3_URL}
ENV S3_BUCKET=${S3_BUCKET}
ENV S3_ACCESS_KEY_ID=${S3_ACCESS_KEY_ID}
ENV S3_SECRET_ACCESS_KEY=${S3_SECRET_ACCESS_KEY}
ENV S3_REGION=${S3_REGION}
ENV S3_ENDPOINT=${S3_ENDPOINT}
ENV S3_PATH_PREFIX=${S3_PATH_PREFIX}

USER node

CMD ["yarn", "start:prod"]