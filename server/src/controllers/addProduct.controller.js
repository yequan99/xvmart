const db = require('../configs/firebasConfig')

function post(req,res) {
    const data = req.body.productDetail
    console.log("received data:", data)
    res.sendStatus(200)
    db.collection("Product").add(data)
}

module.exports = { post }