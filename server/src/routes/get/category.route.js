const express = require('express')
const router = express.Router()
const categoryController = require('../../controllers/get/category.controller')

router.get('/', categoryController.get)

module.exports = router