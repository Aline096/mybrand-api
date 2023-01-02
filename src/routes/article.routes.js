import express from 'express'
import {authGuard} from '../middlewares/authGuard'
import {createArticle, getAllArticle, getArticle, updateArticle, deleteArticle} from'./../controllers/article.controller'

const router = express.Router()

// Create article
router.post('', authGuard, createArticle)

// Get all articles
router.get('/', authGuard, getAllArticle)

// Get article by id
router.get('/:id', getArticle)

// Update article by id
router.patch('/:id', authGuard, updateArticle)

// Delete article by id
router.delete('/:id', authGuard, deleteArticle)

export default router