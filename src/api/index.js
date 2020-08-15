const Router = require('koa-router')
const scheduleRouter = require('./routes/schedule')

const router = new Router()

router.use('/schedule', scheduleRouter.routes())

module.exports = router