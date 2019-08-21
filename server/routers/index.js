const Router = require('koa-router')
const defaults = require('../controllers/defaults')
const upload = require('../controllers/upload')

const router = new Router()

// defaults
router.get('/', defaults.index)
router.get('/403', defaults.forbidden)
router.get('/404', defaults.notFound)

// upload
router.get('/upload', upload.home)
router.get('/upload/check/file', upload.checkFile)
router.post('/upload/upload/file', upload.uploadFile)
router.get('/upload/merge/file', upload.mergeFile)

module.exports = router