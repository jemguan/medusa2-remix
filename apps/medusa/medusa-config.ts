import { defineConfig, loadEnv } from '@medusajs/framework/utils';

loadEnv(process.env.NODE_ENV || 'development', process.cwd());

// const REDIS_URL = process.env.REDIS_URL;
// const STRIPE_API_KEY = process.env.STRIPE_API_KEY;
const IS_TEST = process.env.NODE_ENV === 'test';

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS || "*",
      adminCors: process.env.ADMIN_CORS || "*",
      authCors: process.env.AUTH_CORS || "*",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    redisUrl: process.env.CACHE_REDIS_URL,
  },

  modules: [
    // 暂时禁用 Stripe 支付模块
    /*
    {
      resolve: '@medusajs/medusa/payment',
      options: {
        providers: [
          {
            resolve: '@medusajs/medusa/payment-stripe',
            id: 'stripe',
            options: {
              apiKey: STRIPE_API_KEY,
            },
          },
        ],
      },
    },
    */
    {
      resolve: "@medusajs/medusa/file",
      options: {
        providers: [
          {
            resolve: "@medusajs/medusa/file-s3",
            id: "s3",
            options: {
              file_url: process.env.SPACE_URL,
              bucket: process.env.SPACE_BUCKET,
              endpoint: `https://${process.env.SPACE_REGION}.digitaloceanspaces.com`,
              access_key_id: process.env.SPACE_ACCESS_KEY_ID,
              secret_access_key: process.env.SPACE_SECRET_ACCESS_KEY,
              region: process.env.SPACE_REGION,
              prefix: process.env.SPACE_PATH,
              additional_client_config: {
                forcePathStyle: true
              }
            },
          },
        ],
      },
    },
    {
      resolve: "@medusajs/medusa/cache-redis",
      options: {
        redisUrl: process.env.CACHE_REDIS_URL,
      },
      key: "cache",
    },
    {
      resolve: "@medusajs/medusa/event-bus-redis",
      options: {
        redisUrl: process.env.EVENT_REDIS_URL,
      },
      key: "events",
    },
    {
      resolve: "@medusajs/medusa/workflow-engine-redis",
      options: {
        redis: {
          url: process.env.WORKFLOW_REDIS_URL,
        },
      },
      key: "workflows",
    },
  ],
  admin: {
    backendUrl: process.env.ADMIN_BACKEND_URL || 'http://localhost:9000',
    vite: () => ({
      css: {
        postcss: [], // TODO: required to avoid issue, check if it can be removed after v2 is released
      },
    }),
  },
});
