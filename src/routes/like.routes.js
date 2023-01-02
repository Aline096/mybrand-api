import express from 'express'
const router = express.Router();
import {  like, unlike } from "../controllers/like.controller";

router.patch('/:articleId', like)
router.put('/:articleId', unlike)

export default router