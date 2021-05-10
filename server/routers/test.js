const Router = require('koa-router')
const test = require('../controllers/test')
const file = require('../controllers/file')
const picture = require('../controllers/picture')

const router = new Router()

// test
router.get('/json', test.json)
router.get('/string', test.string)

// upload file
router.get('/upload/file', file.home)
router.get('/upload/file/check', file.checkFile)
router.get('/upload/file/merge', file.mergeFile)
router.post('/upload/file/upload', file.uploadFile)

// upload picture
router.get('/upload/picture', picture.home)
router.post('/upload/picture/file', picture.baseFile)

module.exports = router
