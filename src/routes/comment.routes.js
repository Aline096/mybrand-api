import express from 'express'
const router = express.Router();
const { getComments, postComment } = require('../controllers/comment.controller');

router.get('/:id', getComments)
router.post('/:id', postComment)

export default router