const express = require('express')
const router = express.Router()
const cartController = require('../../controllers/post/cart.controller')

router.post('/', cartController.post)

module.exports = router