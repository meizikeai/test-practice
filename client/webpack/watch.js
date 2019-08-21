const shelljs = require('shelljs')
const prompt = require('./prompt.js')

prompt().then(({ oraInstance, args }) => {
  console.log(args)
  const child = shelljs.exec(`
    webpack --mode development --config ./client/webpack/webpack.config.js --progress --hide-modules ${args}
  `, { async: true })

  child.stdout.on('data', data => {
    if (data.toLowerCase().includes('webpack')) {
      oraInstance.stop()
      oraInstance.clear()
    }
  })

  child.stderr.on('data', () => {
    oraInstance.stop()
    oraInstance.clear()
  })
})
