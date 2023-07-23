const { db } = require('../../configs/firebaseConfig')

async function update(req,res) {
    try {
        const data = req.body.phoneNumber
        console.log("[Update Number Controller] Received request for: %s", data)
        db.collection("Number").doc(data.ID).update({ 
            "PhoneNumber": data.PhoneNumber,
        })
        res.sendStatus(200)
    } catch (error) {
        console.log("[Update Number Controller] Error updating request: %s", error)
    }
}

module.exports = { update }