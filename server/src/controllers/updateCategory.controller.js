const { db } = require('../configs/firebaseConfig')

async function update(req,res) {
    try {
        const data = req.body.category
        console.log("received data:", data)

        db.collection("Category").doc(data.ID).update({ 
            "Name": data.Name
        })

        res.sendStatus(200)
    } catch (error) {
        console.error("Error while deleting order", error)
    }
}

module.exports = { update }