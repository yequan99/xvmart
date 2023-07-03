const express = require('express')
const router = express.Router()
const updateProductController = require('../controllers/updateProduct.controller')

router.post('/', updateProductController.update)

module.exports = router