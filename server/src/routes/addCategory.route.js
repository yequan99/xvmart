const express = require('express')
const router = express.Router()
const addCategoryController = require('../controllers/addCategory.controller')

router.post('/', addCategoryController.post)

module.exports = router