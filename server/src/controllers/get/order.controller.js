const orderedJSON = require("ordered-json")
const { db } = require('../../configs/firebaseConfig')

async function get(req, res) {
    try {
        let order = []

        const orderRef = db.collection('Orders')
        const orderSnapshot = await orderRef.get()
        orderSnapshot.forEach(doc => {
            let orderItem = doc.data()
            orderItem.ID = doc.id
            const orderString = orderedJSON.stringify(orderItem, {order:["ID", "Name", "Block", "Level", "Unit", "Date", "Item", "Quantity", "Price", "Description"]})
            const orderJSON = JSON.parse(orderString)
            order.push(orderJSON)
        })

        const orderRes = { "order": order }
        return res.status(200).json(orderRes)
    } catch (error) {
        console.log("[GET Order Controller] Error getting request: %s", error)
        return res.status(500).send(error)
    }
}

module.exports = { get }