const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 5001

const productsRouter = require('./src/routes/products.route')
const cartRouter = require('./src/routes/cart.route')
const ordersRouter = require('./src/routes/orders.route')
const addProductRouter = require('./src/routes/addProduct.route')
const completeOrdersRouter = require('./src/routes/completeOrders.route')
const updateProductRouter = require('./src/routes/updateProducts.route')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use('/product', productsRouter)
app.use('/cart', cartRouter)
app.use('/orders', ordersRouter)
app.use('/addProduct', addProductRouter)
app.use('/completeOrder', completeOrdersRouter)
app.use('/updateProduct', updateProductRouter)

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })