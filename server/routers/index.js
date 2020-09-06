const Router = require('koa-router')
const defaults = require('../controllers/defaults')
const file = require('../controllers/file')
const picture = require('../controllers/picture')

const router = new Router()

// defaults
router.get('/', defaults.index)
router.get('/403', defaults.forbidden)
router.get('/404', defaults.notFound)

// upload file
router.get('/upload/file', file.home)
router.get('/upload/file/check', file.checkFile)
router.post('/upload/file/upload', file.uploadFile)
router.get('/upload/file/merge', file.mergeFile)

// upload picture
router.get('/upload/picture', picture.home)
router.post('/upload/picture/file', picture.baseFile)

module.exports = router