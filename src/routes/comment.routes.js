import express from 'express'
const router = express.Router();
import { getComments, postComment } from "../controllers/comment.controller";

router.get('/:id', getComments)
router.post('/:id', postComment)

export default router