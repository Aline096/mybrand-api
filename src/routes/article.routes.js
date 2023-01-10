import express from 'express'
import {authGuard} from '../middlewares/authGuard'
import {createArticle, getAllArticle, getArticle, updateArticle, deleteArticle} from'./../controllers/article.controller'
import { createArticleValidation, updateArticleValidation } from "../validations/article/create-article.validation";

const router = express.Router()

// Create article
router.post('', authGuard,createArticleValidation, createArticle)

// Get all articles
router.get('/', getAllArticle)

// Get article by id
router.get('/:id', getArticle)

// Update article by id
router.patch('/:id', authGuard, updateArticleValidation, updateArticle)

// Delete article by id
router.delete('/:id', authGuard, deleteArticle)

export default router