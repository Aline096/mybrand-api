import express from 'express';
import welcome from './welcome.routes'
import article from './article.routes'
import comment from './comment.routes'
import message from './message.routes'
import user from './user.routes'

const router = express.Router()

router.use('/', welcome)
router.use('/article', article)
router.use('/comment', comment)
router.use('/message', message)
router.use('/user',user)

export default router