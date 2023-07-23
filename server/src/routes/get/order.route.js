const express = require('express')
const router = express.Router()
const orderController = require('../../controllers/get/order.controller')

router.get('/', orderController.get)

module.exports = router