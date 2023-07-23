const { db } = require('../../configs/firebaseConfig')

async function del(req,res) {
    try {
        const data = req.body.item
        console.log("[Delete Product Controller] Received request for: %s", data)
        const result = await db.collection('Product').doc(data.ID).delete()
        res.sendStatus(200)
    } catch (error) {
        console.log("[Delete Product Controller] Error updating request: %s", error)
    }
}

module.exports = { del }