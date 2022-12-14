const express = require('express')
const router = express.Router()
const {createArticle, getAllArticle, getArticle, updateArticle, deleteArticle} = require('./../controllers/article.controller')

// Create article
router.post('', createArticle)

// Get all articles
router.get('/', getAllArticle)

// Get article by id
router.get('/:id', getArticle)

// Update article by id
router.patch('/:id',updateArticle)

// Delete article by id
router.delete('/:id', deleteArticle)

module.exports = router