const orderedJSON = require("ordered-json")
const db = require('../configs/firebasConfig')

async function get(req, res) {
    try {
        let product = []
        let category = []

        await db.collection("Product").get().then(querysnapshot => {
            querysnapshot.forEach((doc) => {
                const json = orderedJSON.stringify(doc.data(), {order:["Name", "Category", "Price", "Quantity", "Description"]})
                const output = JSON.parse(json)
                output["ID"] = doc.id
                product.push(output)
            })
        })

        await db.collection("Category").get().then(querysnapshot => {
            querysnapshot.forEach((doc) => {
                const json = orderedJSON.stringify(doc.data(), {order:["Name"]})
                const output = JSON.parse(json)
                category.push(output)
            })
        })

        const productCategory = { "product": product, "category": category }
        return res.status(200).send(productCategory)
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = { get }