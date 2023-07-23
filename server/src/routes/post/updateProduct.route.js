const express = require('express')
const router = express.Router()
const ProductController = require('../../controllers/post/updateProduct.controller')

router.post('/', ProductController.update)

module.exports = router