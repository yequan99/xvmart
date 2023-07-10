const express = require('express')
const router = express.Router()
const updatePhoneController = require('../controllers/updatePhone.controller')

router.post('/', updatePhoneController.update)

module.exports = router