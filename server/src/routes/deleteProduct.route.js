const express = require('express')
const router = express.Router()
const deleteProductController = require('../controllers/deleteProduct.controller')

router.post('/', deleteProductController.del)

module.exports = router