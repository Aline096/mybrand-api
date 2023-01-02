import express from 'express'
const router = express.Router();
import {  postComment } from "../controllers/comment.controller";
import { commentValidation } from '../validations/comment/comment.validation';

router.patch('/:articleId',commentValidation, postComment)

export default router