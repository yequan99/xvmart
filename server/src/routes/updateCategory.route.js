const express = require('express')
const router = express.Router()
const updateCategoryController = require('../controllers/updateCategory.controller')

router.post('/', updateCategoryController.update)

module.exports = router