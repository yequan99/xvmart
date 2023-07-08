const express = require('express')
const router = express.Router()
const deleteCategoryController = require('../controllers/deleteCategory.controller')

router.post('/', deleteCategoryController.del)

module.exports = router