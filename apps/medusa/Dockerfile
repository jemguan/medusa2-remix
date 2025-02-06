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

# 从构建阶段复制所有文件
COPY --from=base /app .
COPY --from=base /app/.medusa ./.medusa

ENV PORT=9000
ENV NODE_ENV=production
ENV REDIS_URL=${REDIS_URL}
ENV DATABASE_URL=${DATABASE_URL}
ENV STORE_CORS=${STORE_CORS}
ENV ADMIN_CORS=${ADMIN_CORS}
ENV JWT_SECRET=${JWT_SECRET}
ENV COOKIE_SECRET=${COOKIE_SECRET}

# 确保 S3 环境变量在容器中可用
ENV SPACE_URL=${SPACE_URL}
ENV SPACE_BUCKET=${SPACE_BUCKET}
ENV SPACE_ACCESS_KEY_ID=${SPACE_ACCESS_KEY_ID}
ENV SPACE_SECRET_ACCESS_KEY=${SPACE_SECRET_ACCESS_KEY}
ENV SPACE_REGION=${SPACE_REGION}
ENV SPACE_PATH=${SPACE_PATH}

# 设置目录权限
RUN chown -R node:node /app

USER node

CMD ["yarn", "start"]