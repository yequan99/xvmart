const express = require('express')
const router = express.Router()
const updatePhoneController = require('../../controllers/post/updatePhone.controller')

router.post('/', updatePhoneController.update)

module.exports = router