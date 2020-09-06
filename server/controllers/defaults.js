const ctxUtils = require('../libs/ctx-utils')

module.exports = {
  async index (ctx, next) {
    const { device } = ctxUtils({ ctx })

    const result = {
      title: 'Test Practice！',
      device: device ? 'Personal Computer' : 'Mobile Phone',
    }
    const response = Object.assign({
      menu: true,
      sharebar: true,
    }, result)

    await ctx.render('index', response)
    await next()
  },

  async notFound (ctx) {
    ctx.state = { status: '404', message: 'Not Found' }
    await ctx.render('error')
  },

  async forbidden (ctx) {
    await ctx.render('error', { status: '403', message: 'Forbidden' })
  },
}
