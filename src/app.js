const Koa = require('koa')
const config = require('./config')

const loaders = require('./loaders')
const logger = require('./loaders/logger')

const app = new Koa()

const startApp = async () => {
    await loaders(app)
    
    app.listen(config.port, () => {
        logger.info(`### Ohys-Server is running on ${config.port}! ###`)
    })
    
}

startApp()