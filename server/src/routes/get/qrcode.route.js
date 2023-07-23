const express = require('express')
const router = express.Router()
const qrcodeController = require('../../controllers/get/qrcode.controller')

router.get('/', qrcodeController.get)

module.exports = router