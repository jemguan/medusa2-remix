FROM node:20-alpine AS base

RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies
COPY . .

# Install dependencies
RUN yarn install

# Install medusa CLI globally
RUN yarn global add @medusajs/cli

# Build the app
RUN yarn build

# Production image
FROM node:20-alpine AS runner

WORKDIR /app

# 从构建阶段复制所有文件
COPY --from=base /app .
COPY --from=base /app/.medusa ./.medusa
COPY --from=base /usr/local/share/.config/yarn/global ./global

# Add global yarn bin to PATH
ENV PATH="/app/global/node_modules/.bin:${PATH}"

# 设置目录权限
RUN chown -R node:node /app

USER node

CMD ["sh", "-c", "cd .medusa/server && yarn start"]