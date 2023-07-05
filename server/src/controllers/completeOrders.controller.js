const { db } = require('../configs/firebaseConfig')
const orderedJSON = require("ordered-json")

async function del(req,res) {
    try {
        const data = req.body.order
        console.log("received data:", data)

        await db.collection("Product").get().then(querysnapshot => {
            querysnapshot.forEach((doc) => {
                const json = orderedJSON.stringify(doc.data(), {order:["Name", "Category", "Price", "Quantity", "Description"]})
                const output = JSON.parse(json)
                if (output["Name"] === data.Item && output["Description"] === data.Description) {
                    db.collection("Product").doc(doc.id).update({ "Quantity": output["Quantity"] - data.Quantity })
                    console.log("Updated product quantity")
                }
            })
        })

        const result = await db.collection('Orders').doc(data.ID).delete()
        res.sendStatus(200)
    } catch (error) {
        console.error("Error while deleting order", error)
    }
}

module.exports = { del }