import express from 'express'
import auth from '../middlewares/authMiddleware'
import {createArticle, getAllArticle, getArticle, updateArticle, deleteArticle} from'./../controllers/article.controller'

const router = express.Router()

// Create article
router.post('',auth, createArticle)

// Get all articles
router.get('/', getAllArticle)

// Get article by id
router.get('/:id', getArticle)

// Update article by id
router.patch('/:id',auth, updateArticle)

// Delete article by id
router.delete('/:id',auth, deleteArticle)

export default router