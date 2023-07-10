const { db } = require('../configs/firebaseConfig')

async function update(req,res) {
    try {
        const data = req.body.phoneNumber
        console.log("received data:", data)

        db.collection("Number").doc(data.ID).update({ 
            "PhoneNumber": data.PhoneNumber,
        })

        res.sendStatus(200)
    } catch (error) {
        console.error("Error while deleting order", error)
    }
}

module.exports = { update }