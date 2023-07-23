const { db } = require('../../configs/firebaseConfig')

function post(req,res) {
    try {
        const data = req.body.category
        console.log("[Add Category Controller] Received request for: %s", data)
        db.collection("Category").add(data)
        res.sendStatus(200)
    } catch (error) {
        console.log("[Add Cateogory Controller] Error updating request: %s", error)
    }
}

module.exports = { post }