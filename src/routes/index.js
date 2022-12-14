const express = require('express')
const router = express.Router()
const welcome = require('./welocome.routes')
const article = require('./article.routes')

router.use('/', welcome)
router.use('/article', article)

module.exports = router