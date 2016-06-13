module.exports = {
    server: {
        port: process.env.PORT || process.env.SERVER_PORT,
        secret: process.env.SERVER_SECRET
    },

    redis: {
        url: process.env.REDIS_URL,
        ttl: 1209600 // 14 days
    },

    auth: {
        steam: {
            apiKey: process.env.STEAM_API_KEY,
            realm: process.env.STEAM_REALM,
            returnURL: process.env.STEAM_REALM + '/auth/steam'
        }
    },

    sql: {
        url: process.env.DATABASE_URL,
        options: {
            logging: function noop() {}
        }
    }
};