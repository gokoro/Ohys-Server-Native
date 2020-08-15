const dotenv = require('dotenv')

dotenv.config()

module.exports = {
    port: process.env.PORT,

    database_host: process.env.DATABASE_URL,
    database_name: process.env.DATABASE_NAME,

    debug: process.env.LOG_LEVEL
}
