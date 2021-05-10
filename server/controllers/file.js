const path = require('path')
const { copyFiles, folderState, getChunkFiles, getFileExt, matchFileType, mergeFiles } = require('../libs/upload')

const paths = '../../public/upload'

module.exports = {
  async home(ctx, next) {
    const result = {
      title: 'upload file',
    }

    ctx.state = Object.assign({}, result, {
      config: JSON.stringify({ upload: { state: 'start', file: null } }),
    })

    await ctx.render('file')
    await next()
  },

  async checkFile(ctx) {
    const { type, token } = ctx.query
    const fileType = matchFileType(type)

    let result = {
      chunk: [],
      code: 400,
    }

    if (fileType) {
      const ext = getFileExt(type)
      const folder = path.join(__dirname, paths, token)
      const filePath = path.join(__dirname, paths, `${token}${ext}`)

      result = getChunkFiles({ folder, filePath })

      result.file = path.join('upload', `${token}${ext}`)
    }

    ctx.body = result
  },

  async uploadFile(ctx) {
    const result = {
      code: 400,
    }

    try {
      const photo = ctx.request.files
      const { index, token } = ctx.request.body
      const filePath = photo.data.path
      const folder = path.resolve(__dirname, paths, token)
      const destFile = path.resolve(folder, index)

      folderState(folder)
      copyFiles(filePath, destFile)

      result.code = 200
      result.index = index
    } catch (err) {
      console.error(err)
    } finally {
      ctx.body = result
    }
  },

  async mergeFile(ctx) {
    try {
      const result = { code: 400 }
      const { type, token } = ctx.query
      const folder = path.resolve(__dirname, paths, token)

      const fileType = matchFileType(type)

      if (fileType) {
        const ext = getFileExt(type)
        const state = mergeFiles({ folder, paths, name: `${token}${ext}`, check: token })

        if (state) {
          result.code = 200
          result.file = path.join('upload', `${token}${ext}`)
        }
      }

      ctx.body = result
    } catch (err) {
      console.error(err)
    }
  },
}
