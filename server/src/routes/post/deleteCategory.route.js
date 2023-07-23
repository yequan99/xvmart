const express = require('express')
const router = express.Router()
const deleteCategoryController = require('../../controllers/post/deleteCategory.controller')

router.post('/', deleteCategoryController.del)

module.exports = router