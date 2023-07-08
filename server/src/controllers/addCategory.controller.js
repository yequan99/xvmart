const { db } = require('../configs/firebaseConfig')

function post(req,res) {
    const data = req.body.category
    console.log("received data:", data)
    res.sendStatus(200)
    db.collection("Category").add(data)
}

module.exports = { post }