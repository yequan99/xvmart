const express = require('express')
const bodyParser = require('body-parser')
const app = express()
require("dotenv").config()
const productsRouter = require('./src/routes/products.route')
const cartRouter = require('./src/routes/cart.route')
const PORT = process.env.PORT || 5001

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use('/product', productsRouter)
app.use('/cart', cartRouter)

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })