const { db } = require('../configs/firebaseConfig')

async function del(req,res) {
    try {
        const data = req.body.category
        console.log("received data:", data)

        const result = await db.collection('Category').doc(data.ID).delete()
        res.sendStatus(200)
    } catch (error) {
        console.error("Error while deleting order", error)
    }
}

module.exports = { del }