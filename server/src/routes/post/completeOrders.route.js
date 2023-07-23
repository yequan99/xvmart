const express = require('express')
const router = express.Router()
const completeOrdersController = require('../../controllers/post/completeOrders.controller')

router.post('/', completeOrdersController.del)

module.exports = router