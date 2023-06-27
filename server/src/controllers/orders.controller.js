const orderedJSON = require("ordered-json")
const db = require('../configs/firebasConfig')

async function get(req, res) {
    try {
        let orders = []

        await db.collection("Orders").get().then(querysnapshot => {
            let docs = querysnapshot.docs

            for (let doc of docs) {
                const json = orderedJSON.stringify(doc.data(), {order:["Name", "Block", "Level", "Unit", "Date", "Item", "Quantity", "Price", "Description"]})
                const output = JSON.parse(json)
                orders.push(output)
            }
        })

        const orderList = { "orders": orders }
        return res.status(200).send(orderList)
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = { get }