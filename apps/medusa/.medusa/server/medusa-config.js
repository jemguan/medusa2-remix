"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
(0, utils_1.loadEnv)(process.env.NODE_ENV || 'development', process.cwd());
const REDIS_URL = process.env.REDIS_URL;
// const STRIPE_API_KEY = process.env.STRIPE_API_KEY;
const IS_TEST = process.env.NODE_ENV === 'test';
const cacheModule = REDIS_URL
    ? { resolve: '@medusajs/medusa/cache-inmemory' }
    : {
        resolve: '@medusajs/medusa/cache-redis',
        options: {
            redisUrl: REDIS_URL,
        },
    };
const eventBusModule = REDIS_URL
    ? { resolve: '@medusajs/medusa/event-bus-local' }
    : {
        resolve: '@medusajs/medusa/event-bus-redis',
        options: {
            redisUrl: REDIS_URL,
        },
    };
const workflowEngineModule = REDIS_URL
    ? { resolve: '@medusajs/medusa/workflow-engine-inmemory' }
    : {
        resolve: '@medusajs/medusa/workflow-engine-redis',
        options: {
            redis: {
                url: REDIS_URL,
            },
        },
    };
module.exports = (0, utils_1.defineConfig)({
    projectConfig: {
        databaseUrl: process.env.DATABASE_URL,
        http: {
            storeCors: process.env.STORE_CORS,
            adminCors: process.env.ADMIN_CORS,
            authCors: process.env.AUTH_CORS,
            jwtSecret: process.env.JWT_SECRET || "supersecret",
            cookieSecret: process.env.COOKIE_SECRET || "supersecret",
        },
        redisPrefix: process.env.REDIS_PREFIX,
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
        cacheModule,
        eventBusModule,
        workflowEngineModule,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkdXNhLWNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21lZHVzYS1jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBa0U7QUFFbEUsSUFBQSxlQUFPLEVBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLElBQUksYUFBYSxFQUFFLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBRTlELE1BQU0sU0FBUyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDO0FBQ3hDLHFEQUFxRDtBQUNyRCxNQUFNLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxNQUFNLENBQUM7QUFFaEQsTUFBTSxXQUFXLEdBQUcsU0FBUztJQUMzQixDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsaUNBQWlDLEVBQUU7SUFDaEQsQ0FBQyxDQUFDO1FBQ0UsT0FBTyxFQUFFLDhCQUE4QjtRQUN2QyxPQUFPLEVBQUU7WUFDUCxRQUFRLEVBQUUsU0FBUztTQUNwQjtLQUNGLENBQUM7QUFFTixNQUFNLGNBQWMsR0FBRyxTQUFTO0lBQzlCLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxrQ0FBa0MsRUFBRTtJQUNqRCxDQUFDLENBQUM7UUFDRSxPQUFPLEVBQUUsa0NBQWtDO1FBQzNDLE9BQU8sRUFBRTtZQUNQLFFBQVEsRUFBRSxTQUFTO1NBQ3BCO0tBQ0YsQ0FBQztBQUVOLE1BQU0sb0JBQW9CLEdBQUcsU0FBUztJQUNwQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsMkNBQTJDLEVBQUU7SUFDMUQsQ0FBQyxDQUFDO1FBQ0UsT0FBTyxFQUFFLHdDQUF3QztRQUNqRCxPQUFPLEVBQUU7WUFDUCxLQUFLLEVBQUU7Z0JBQ0wsR0FBRyxFQUFFLFNBQVM7YUFDZjtTQUNGO0tBQ0YsQ0FBQztBQUVOLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBQSxvQkFBWSxFQUFDO0lBQzVCLGFBQWEsRUFBRTtRQUNiLFdBQVcsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVk7UUFDckMsSUFBSSxFQUFFO1lBQ0osU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVztZQUNsQyxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFXO1lBQ2xDLFFBQVEsRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVU7WUFDaEMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxJQUFJLGFBQWE7WUFDbEQsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxJQUFJLGFBQWE7U0FDekQ7UUFDRCxXQUFXLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZO0tBQ3RDO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsbUJBQW1CO1FBQ25COzs7Ozs7Ozs7Ozs7Ozs7VUFlRTtRQUNGO1lBQ0UsT0FBTyxFQUFFLHVCQUF1QjtZQUNoQyxPQUFPLEVBQUU7Z0JBQ1AsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSwwQkFBMEI7d0JBQ25DLEVBQUUsRUFBRSxJQUFJO3dCQUNSLE9BQU8sRUFBRTs0QkFDUCxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTOzRCQUMvQixNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZOzRCQUNoQyxRQUFRLEVBQUUsV0FBVyxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVkseUJBQXlCOzRCQUN0RSxhQUFhLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUI7NEJBQzlDLGlCQUFpQixFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCOzRCQUN0RCxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZOzRCQUNoQyxNQUFNLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVOzRCQUM5Qix3QkFBd0IsRUFBRTtnQ0FDeEIsY0FBYyxFQUFFLElBQUk7NkJBQ3JCO3lCQUNGO3FCQUNGO2lCQUNGO2FBQ0Y7U0FDRjtRQUNELFdBQVc7UUFDWCxjQUFjO1FBQ2Qsb0JBQW9CO0tBQ3JCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsVUFBVSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLElBQUksdUJBQXVCO1FBQ3BFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO1lBQ1gsR0FBRyxFQUFFO2dCQUNILE9BQU8sRUFBRSxFQUFFLEVBQUUsaUZBQWlGO2FBQy9GO1NBQ0YsQ0FBQztLQUNIO0NBQ0YsQ0FBQyxDQUFDIn0=