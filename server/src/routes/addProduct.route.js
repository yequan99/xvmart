const express = require('express')
const router = express.Router()
const addProductController = require('../controllers/addProduct.controller')

router.post('/', addProductController.post)

module.exports = router