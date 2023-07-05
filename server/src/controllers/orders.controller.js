const orderedJSON = require("ordered-json")
const { db } = require('../configs/firebaseConfig')

async function get(req, res) {
    try {
        let orders = []

        await db.collection("Orders").get().then(querysnapshot => {
            querysnapshot.forEach((doc) => {
                const json = orderedJSON.stringify(doc.data(), {order:["Name", "Block", "Level", "Unit", "Date", "Item", "Quantity", "Price", "Description"]})
                const output = JSON.parse(json)
                output["ID"] = doc.id
                orders.push(output)
            })
        })

        const orderList = { "orders": orders }
        return res.status(200).send(orderList)
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = { get }