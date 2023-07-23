const { db } = require('../../configs/firebaseConfig')

function post(req,res) {
    try {
        const data = req.body.sendOrder
        console.log("[Cart Controller] Received request for: %s", data)
        data.forEach(function(element) {
            db.collection("Orders").add(element)
        })
        res.sendStatus(200)
    } catch (error) {
        console.log("[Cart Controller] Error updating request: %s", error)
    }
}

module.exports = { post }