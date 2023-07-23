const { db } = require('../../configs/firebaseConfig')

async function del(req,res) {
    try {
        const data = req.body.item
        console.log("[Update Category Controller] Received request for: %s", data)
        const result = await db.collection('Category').doc(data.ID).delete()
        res.sendStatus(200)
    } catch (error) {
        console.log("[Update Category Controller] Error updating request: %s", error)
    }
}

module.exports = { del }