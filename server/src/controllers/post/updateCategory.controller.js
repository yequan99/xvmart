const { db } = require('../../configs/firebaseConfig')

async function update(req,res) {
    try {
        const data = req.body.category
        console.log("[Update Category Controller] Received request for: %s", data)
        db.collection("Category").doc(data.ID).update({ 
            "Name": data.Name
        })
        res.sendStatus(200)
    } catch (error) {
        console.log("[Update Category Controller] Error updating request: %s", error)
    }
}

module.exports = { update }