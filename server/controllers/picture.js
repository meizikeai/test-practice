const fs = require('fs')
// const path = require('path')

// const paths = '../../public/upload'

module.exports = {
  async home(ctx, next) {
    const result = {
      title: 'upload practice',
    }

    ctx.state = Object.assign({}, result, {
      config: JSON.stringify({ upload: { state: 'start', file: null } }),
    })

    await ctx.render('picture')
    await next()
  },

  async baseFile(ctx) {
    try {
      const result = { code: 400, message: '发生错误！' }
      const { base } = ctx.request.body

      if (base) {
        // console.log(base)
        const picture = base.replace(/^data:image\/\w+;base64,/, '')
        const dataBuffer = Buffer.from(picture, 'base64')
        const name = `/upload/avatar-${Date.now()}.png`

        await fs.writeFileSync(`./public${name}`, dataBuffer)

        result.code = 200
        result.data = name
        result.message = '保存成功！'
      }

      ctx.body = result
    } catch (err) {
      console.error(err)
    }
  },
}
