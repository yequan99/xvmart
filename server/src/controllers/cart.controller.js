const db = require('../configs/firebasConfig')

function post(req,res) {
    const data = req.body.sendOrder
    console.log("received data:", data)
    res.sendStatus(200)
    data.forEach(function(element) {
        db.collection("Orders").add(element)
    })
}

module.exports = { post }