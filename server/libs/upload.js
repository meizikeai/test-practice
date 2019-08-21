
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

/**
 * 移动文件
 * @param {String} paths 原地址
 * @param {String} target 新地址
 */
function copyFiles (paths, target) {
  let result = false
  try {
    fs.renameSync(paths, target)
    result = true
  } catch (err) {
    console.error(err)
    result = false
  }

  return result
}

/**
 * 文件夹状态检查，创建文件夹
 * @param {String} folder 文件夹路径
 */
function folderState (folder) {
  let result = false

  try {
    const isStat = isExist({ filePath: folder, stats: 'directory' })

    if (!isStat) {
      fs.mkdirSync(folder, error => {
        if (error) {
          console.error(error)
          return false
        }

        result = true
      })
    }
  } catch (err) {
    result = false
    console.error(err)
  }

  // console.log(`→ folder → ${folder}`)
  // console.log(`→ result → ${result}`)
  return result
}

/**
 * 获取文件夹下的文件
 * @param {Object} filePath 文件夹路径
 */
function getChunkFiles ({ folder, filePath }) {
  const result = {
    chunk: [],
    code: 400,
  }

  const isFileExist = isExist({ filePath, stats: 'file' })
  if (isFileExist) {
    result.code = 200
  }

  const isFolderExist = isExist({ filePath: folder, stats: 'directory' })
  if (isFolderExist) {
    result.chunk = getFile(folder)
  }

  return result
}

/**
 * 返回文件夹下所有文件
 * @param {String} filePath 文件夹路径
 */
function getFile (filePath) {
  return fs.readdirSync(filePath) || []
}

/**
 * 检查文件夹状态
 * @param {String} filePath 文件夹路径
 */
function isExist ({ filePath, stats }) {
  let result = false

  try {
    const fileStats = fs.statSync(filePath)
    if (stats === 'directory') {
      if (fileStats.isDirectory()) {
        result = true
      }
    } else if (stats === 'file') {
      if (fileStats.isFile()) {
        result = true
      }
    }
  } catch (err) {
    // console.error(err)
    result = false
  }

  return result
}

/**
 * 合并与生成可读文件
 * @param {String} folder 文件夹路径
 * @param {String} paths 相对路径
 * @param {String} name 文件名
 */
function mergeFiles ({ folder, paths, name, check }) {
  let { result, buffer, team } = { result: false, buffer: null, team: [] }
  const target = path.resolve(__dirname, paths, name)

  try {
    const list = getFile(folder)
    team = list.sort((a, b) => a - b)

    for (let i = 0; i < team.length; i++) {
      team[i] = `${folder}/${team[i]}`
    }

    buffer = team.map(f => fs.readFileSync(f))
  } catch (err) {
    console.error(err)
    result = false
  } finally {
    result = true

    // fs.writeFile(target, Buffer.concat(buffer), err => {
    //   if (err) {
    //     console.error(err)
    //   }
    // })

    // 同步写入
    fs.writeFileSync(target, Buffer.concat(buffer))

    // 对生成的文件进行md5地校验
    const fileBuffer = fs.readFileSync(target)
    const fileHash = crypto.createHash('md5')

    fileHash.update(fileBuffer)
    const md5 = fileHash.digest('hex')

    if (check === md5) {
      result = true

      // 清理分块的文件
      // team.forEach(f => {
      //   fs.unlink(f, err => {
      //     if (err) {
      //       console.error(err)
      //     }

      //     team.shift()
      //     if (team.length <= 0) {
      //       fs.rmdir(folder, err => {
      //         if (err) {
      //           console.error(err)
      //         }
      //       })
      //     }
      //   })
      // })
    }
  }

  return result
}

/**
 * 可上传文件的type
 * @param {String} type 文件的type
 */
function getFileExt (type) {
  const data = {
    'application/pdf': '.pdf',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': '.pptx',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ' .xlsx',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
    'audio/mp3': '.mp3',
    'audio/wav': '.wav',
    'image/gif': '.gif',
    'image/jpeg': '.jpg',
    'image/png': ' .png',
    'image/webp': '.webp',
    'video/mp4': '.mp4',
  }

  return data[type] || ''
}

/**
 * 返回文件的后缀
 * @param {String} type 文件的type
 */
function matchFileType (type) {
  // .pdf
  // .pptx
  // .xlsx
  // .docx
  // .mp3
  // .wav
  // .gif
  // .jpg
  // .png
  // .webp
  // .mp4

  return [
    'application/pdf',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'audio/mp3',
    'audio/wav',
    'image/gif',
    'image/jpeg',
    'image/png',
    'image/webp',
    'video/mp4',
  ].includes(type)
}

module.exports = {
  copyFiles,
  folderState,
  getChunkFiles,
  getFileExt,
  matchFileType,
  mergeFiles,
}