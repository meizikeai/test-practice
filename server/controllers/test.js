const ctxUtils = require('../libs/ctx-utils')

module.exports = {
  async json(ctx) {
    ctx.body = {
      title: 'koa2 json',
    }
  },

  async string(ctx) {
    ctx.body = 'koa2 string'
  },
}
