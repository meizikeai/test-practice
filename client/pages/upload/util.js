import SparkMD5 from 'spark-md5'
import PopupMinLayer from '../../components/popup-min-layer'

let isUpload = 0

async function prepareFile (file) {
  // 第零步：检查类型
  const inFileType = testFileType(file.type)

  if (inFileType) {
    return false
  }

  // 第一步：提取文件
  const token = await extractFile(file)

  // 第二步：匹配文件
  const result = await checkFile({ file, token })

  if (result.code === 200) {
    handleRealUploaded(result.file)
    PopupMinLayer.show({ content: 'ha-ha，极速上传成功！' })
    console.log('---')
    return false
  }

  // 第三步：检查上传
  const state = await sliceAndUploadFile({ file, token, list: result.chunk })
  if (state) {
    return false
  }

  // 第四步：查询状态
  await queryFile({ file, token })
}

function extractFile (file) {
  const one = document.querySelector('#one')
  one.style.display = 'block'

  const extract = one.querySelector('#extract')
  const extractText = extract.querySelector('p')

  return new Promise((resolve, reject) => {
    const blobSlice = File.prototype.slice || File.prototype.mozSlice || File.prototype.webkitSlice
    const chunkSize = getThunkSize()
    const chunks = 100
    const spark = new SparkMD5.ArrayBuffer()
    const fileReader = new FileReader()

    let currentChunk = 0

    fileReader.onload = e => {
      spark.append(e.target.result)
      currentChunk += 1

      if (currentChunk < chunks) {
        handleProceedNext({
          blobSlice,
          chunkSize,
          currentChunk,
          extract,
          extractText,
          file,
          fileReader,
        })
      } else {
        resolve(spark.end())
        console.log('1. extract file finished.')
      }
    }

    fileReader.onerror = () => {
      console.error('something is error.')
      reject()
    }

    handleProceedNext({
      blobSlice,
      chunkSize,
      currentChunk,
      extract,
      extractText,
      file,
      fileReader,
    })
  })
}

async function checkFile ({ file, token }) {
  const inFileType = testFileType(file.type)

  if (inFileType) {
    return false
  }

  let result = {}

  await fetch(`/upload/check/file?token=${token}&type=${file.type}`, {
    method: `get`,
  }).then(res => res.json())
    .then(res => {
      result = res
      console.log('2. check file finished.')
    }).catch(error => {
      console.log(error)
    })

  return result
}

async function sliceAndUploadFile ({ file, token, list }) {
  isUpload = list.length
  const chunkSize = getThunkSize()
  const chunks = Math.ceil(file.size / chunkSize)

  const two = document.querySelector('#two')
  two.style.display = 'block'

  const uploadNode = document.querySelector('#upload')
  const uploadText = uploadNode.querySelector('p')

  // 方法一
  // 使用循环上传（有多少就发多少请求）
  // for (let i = 0; i < chunks; i++) {
  //   const exit = list.includes(`${i}`)
  //   if (!exit) {
  //     await uploadFile({ file, key: i, token, chunks })

  //     isUpload += 1

  //     const radio = Math.floor((isUpload / chunks) * 100)

  //     upload.style.width = `${radio}%`
  //     uploadText.innerHTML = `${radio}%`
  //   }
  // }

  // 方法二
  // 使用队列，发完一个请求再进行下一个
  const stackArray = []
  for (let i = 0; i < chunks; i++) {
    const exit = list.includes(`${i}`)
    if (!exit) {
      stackArray.push(i)
    }
  }

  const result = await handleStack({
    stack: stackArray,
    file,
    token,
    chunks,
    uploadNode,
    uploadText,
  })

  if (result === 'stop') {
    console.log('3. upload file is stop.')
  } else {
    console.log('3. slice and upload file finished.')
  }

  return result
}

async function handleStack ({
  stack,
  file,
  token,
  chunks,
  uploadNode,
  uploadText,
}) {
  if (stack.length <= 0) {
    isUpload = 0
    return false
  }

  await uploadFile({
    file,
    key: stack[0],
    token,
    chunks,
    callback: async res => {
      if (res.code === 200) {
        const { upload } = window.CONFIG

        if (upload.state === 'start') {
          isUpload += 1

          const radio = Math.floor((isUpload / chunks) * 100)

          uploadNode.style.width = `${radio}%`
          uploadText.innerHTML = `${radio}%`

          stack.shift()
          await handleStack({
            stack,
            file,
            token,
            chunks,
            uploadNode,
            uploadText,
          })
        } else {
          stack = []
        }
      }
    },
  })

  const { upload } = window.CONFIG
  if (upload.state === 'stop') {
    return true
  } else if (upload.state === 'start') {
    return false
  }
}

async function uploadFile ({ file, key, token, chunks, callback }) {
  const chunkSize = getThunkSize()
  const end = (key + 1) * chunkSize >= file.size ? file.size : (key + 1) * chunkSize
  const form = new FormData()

  form.append('data', file.slice(key * chunkSize, end))
  form.append('total', chunks)
  form.append('index', key)
  form.append('token', token)

  await fetch(`/upload/upload/file`, {
    method: 'post',
    body: form,
  }).then(res => res.json())
    .then(async res => {
      await callback(res)
    }).catch(error => {
      console.error(error)
    })
}

async function queryFile ({ file, token }) {
  const inFileType = testFileType(file.type)

  if (inFileType) {
    return false
  }

  await fetch(`/upload/merge/file?token=${token}&type=${file.type}`, {
    method: 'get',
  }).then(res => res.json())
    .then(res => {
      handleRealUploaded(res.file)
      console.log('4. query file finished.')
      console.log('---')
    })
}

function getThunkSize () {
  // return 5 * 1024 * 1024
  return 50 * 1024
}

function testFileType (type) {
  const res = matchFileType(type)

  if (!res) {
    PopupMinLayer.show({
      content: `ha-ha，不能上传（${type}）格式！`,
      duration: 3000,
    })

    return true
  } else {
    return false
  }
}

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

function handleRealUploaded (file) {
  const three = document.querySelector('#three')
  three.style.display = 'block'
  const check = three.querySelector('.jump')
  check.innerHTML = `${location.protocol}//${location.host}/${file}`
  check.href = `${location.protocol}//${location.host}/${file}`
}

function handleRestartDefault () {
  const one = document.querySelector('#one')
  one.style.display = 'none'
  const extract = one.querySelector('#extract')
  extract.style.width = '0%'
  const extractText = extract.querySelector('p')
  extractText.innerHTML = '0%'

  const two = document.querySelector('#two')
  two.style.display = 'none'
  const upload = document.querySelector('#upload')
  upload.style.width = '0%'
  const uploadText = upload.querySelector('p')
  uploadText.style.innerHTML = '0%'

  const three = document.querySelector('#three')
  three.style.display = 'none'
  const check = three.querySelector('.jump')
  check.innerHTML = ''
  check.href = ''
}

function handleProceedNext ({
  blobSlice,
  chunkSize,
  currentChunk,
  extract,
  extractText,
  file,
  fileReader,
}) {
  const start = currentChunk * chunkSize
  const end = ((start + chunkSize) >= file.size) ? file.size : start + chunkSize

  fileReader.readAsArrayBuffer(blobSlice.call(file, start, end))

  extract.style.width = `${currentChunk + 1}%`
  extractText.innerHTML = `${currentChunk + 1}%`
}

export {
  prepareFile,
  handleRestartDefault,
}