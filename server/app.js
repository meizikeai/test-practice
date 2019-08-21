const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const compress = require('koa-compress')
const cors = require('koa-better-cors')
const helmet = require('koa-helmet')
const json = require('koa-json')
const koaBody = require('koa-body')
const logger = require('koa-logger')
const onerror = require('koa-onerror')
const path = require('path')
const views = require('koa-views')
const handleRouter = require('../bin/handle-router')

const app = new Koa()

// error handler
onerror(app)

// middlewares
app.use(json())

// logger
app.use(logger())

app.use(helmet())
app.use(compress())

// cors
app.use(cors({
  // origin: '*',
  // methods: 'POST, GET, OPTIONS',
}))

// body, files
app.use(koaBody({ multipart: true }))
app.use(bodyParser({ enableTypes: ['json', 'form', 'text'] }))

// public
app.use(require('koa-static')(path.join(__dirname, '../public')), {
  gzip: true,
  maxage: 10 * 24 * 60 * 1000,
})

// views
app.use(views(path.join(__dirname, '../views'), {
  extension: 'hbs',
  map: { hbs: 'handlebars' },
}))

// routes
handleRouter(app)

// 404､403
app.use(async (ctx, next) => {
  await next()

  const { status } = ctx
  const accepts = ctx.accepts('html', 'json')
  const result = {
    json: {
      code: status,
      message: status === 403 ? 'Forbidden' : 'Page Not Found',
    },
    text: {
      type: 'text',
      body: status === 403 ? 'Forbidden' : 'Page Not Found',
    },
  }

  if (status === 404 || status === 403) {
    if (accepts === 'html') {
      ctx.redirect(`/${status}`)
      return false
    } else if (accepts === 'json') {
      ctx.body = result.json
      return false
    } else {
      ctx.type = result.text.type
      ctx.body = result.text.body
      return false
    }
  }
})

// error-handling
app.on('error', err => {
  console.error(err, { notice: 'server error' })
})

module.exports = app
