FROM node:20-alpine AS base

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY . .

# Install dependencies
RUN yarn install

# Build the app
RUN npx medusa build

# Production image
FROM node:20-alpine AS runner

WORKDIR /app

# 从构建阶段复制所有文件
COPY --from=base /app .
COPY --from=base /app/.medusa ./.medusa

ENV PORT=9000
ENV NODE_ENV=production

# 确保 S3 环境变量在容器中可用
ENV SPACE_URL=${SPACE_URL}
ENV SPACE_BUCKET=${SPACE_BUCKET}
ENV SPACE_ACCESS_KEY_ID=${SPACE_ACCESS_KEY_ID}
ENV SPACE_SECRET_ACCESS_KEY=${SPACE_SECRET_ACCESS_KEY}
ENV SPACE_REGION=${SPACE_REGION}
ENV SPACE_PATH=${SPACE_PATH}

USER node

CMD ["sh", "-c", "yarn predeploy && yarn start"]