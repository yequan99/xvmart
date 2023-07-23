const express = require('express')
const router = express.Router()
const deleteProductController = require('../../controllers/post/deleteProduct.controller')

router.post('/', deleteProductController.del)

module.exports = router