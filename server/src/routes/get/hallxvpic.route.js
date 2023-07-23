const express = require('express')
const router = express.Router()
const xvpicController = require('../../controllers/get/hallxvpic.controller')

router.get('/', xvpicController.get)

module.exports = router