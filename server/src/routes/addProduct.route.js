const express = require('express')
const router = express.Router()
const multer = require('multer')
const addProductController = require('../controllers/addProduct.controller')

const upload = multer()

router.post('/', upload.single('image'), addProductController.post)

module.exports = router