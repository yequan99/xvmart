const { db } = require('../../configs/firebaseConfig')

function post(req,res) {
    try {
        const data = req.body.product
        console.log("[Add Product Controller] Received request for: %s", data)
        db.collection("Product").add(data)
        res.sendStatus(200)
    } catch (error) {
        console.log("[Add Product Controller] Error updating request: %s", error)
    }
}

module.exports = { post }