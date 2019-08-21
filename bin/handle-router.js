const fs = require('fs')
const path = require('path')

const loader = async dir => {
  // eslint-disable-next-line import/no-dynamic-require
  const result = await require(dir)
  return result
}

const checkDirectory = dir => {
  let result = false
  try {
    const state = fs.statSync(dir)
    if (state && state.isDirectory()) {
      result = true
    }
  } catch (err) {
    console.error(`"${dir}" is not a directory!`)
  }
  return result
}

const folder = dir => {
  let vessel = []
  let result = []

  const stat = checkDirectory(dir)
  if (stat) {
    vessel = fs.readdirSync(dir)
  }

  vessel.forEach(name => {
    const file = path.join(dir, name)
    const stat = checkDirectory(file)
    if (stat) {
      result = result.concat(folder(file))
    } else {
      result.push({ name: name.split('.')[0], module: file })
    }
  })

  return result
}

module.exports = app => {
  const route = folder(path.join(__dirname, '../server/routers'))
  route.forEach(async crl => {
    const pass = /\.ts|js$/gi.test(crl.module)
    if (!pass) {
      return false
    }
    const router = await loader(crl.module)
    app.use(router.routes()).use(router.allowedMethods())
  })
}