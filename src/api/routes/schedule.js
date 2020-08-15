const Router = require('koa-router')
const getDailySchedule = require('../../services/schedule')

const router = new Router()

router.get('/', async (ctx) => {
    const tableDTO = ctx.request.query

    const { status, tables } = await getDailySchedule(tableDTO)

    if (!status) {
        ctx.response.status = 400
    }

    return ctx.body = {
        status,
        requestedParam: tableDTO,
        data: tables.animes || null
    }
})

module.exports = router