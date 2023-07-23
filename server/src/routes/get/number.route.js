const express = require('express')
const router = express.Router()
const numberController = require('../../controllers/get/number.controller')

router.get('/', numberController.get)

module.exports = router