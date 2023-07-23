const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
app.use(cors())
require("dotenv").config()
const PORT = process.env.PORT || 5000

const productRouter = require('./src/routes/get/product.route')
const categoryRouter = require('./src/routes/get/category.route')
const xvpicRouter = require('./src/routes/get/hallxvpic.route')
const numberRouter = require('./src/routes/get/number.route')
const orderRouter = require('./src/routes/get/order.route')
const qrcodeRouter = require('./src/routes/get/qrcode.route')

const cartRouter = require('./src/routes/post/cart.route')
const addProductRouter = require('./src/routes/post/addProduct.route')
const updateProductRouter = require('./src/routes/post/updateProduct.route')
const deleteProductRouter = require('./src/routes/post/deleteProduct.route')
const addCategoryRouter = require('./src/routes/post/addCategory.route')
const updateCategoryRouter = require('./src/routes/post/updateCategory.route')
const deleteCategoryRouter = require('./src/routes/post/deleteCategory.route')
const updatePhoneRouter = require('./src/routes/post/updatePhone.route')
const completeOrdersRouter = require('./src/routes/post/completeOrders.route')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use('/product', productRouter)
app.use('/category', categoryRouter)
app.use('/xvpic', xvpicRouter)
app.use('/number', numberRouter)
app.use('/qrcode', qrcodeRouter)
app.use('/order', orderRouter)

app.use('/cart', cartRouter)
app.use('/addProduct', addProductRouter)
app.use('/updateProduct', updateProductRouter)
app.use('/deleteProduct', deleteProductRouter)
app.use('/addCategory', addCategoryRouter)
app.use('/updateCategory', updateCategoryRouter)
app.use('/deleteCategory', deleteCategoryRouter)
app.use('/updatePhone', updatePhoneRouter)
app.use('/completeOrder', completeOrdersRouter)

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })

// Export the Express API
module.exports = app