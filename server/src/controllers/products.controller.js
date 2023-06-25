const orderedJSON = require("ordered-json")
const db = require('../configs/firebasConfig')

async function get(req, res) {
    try {
        let product = []
        let category = []

        await db.collection("Product").get().then(querysnapshot => {
            let docs = querysnapshot.docs

            for (let doc of docs) {
                const json = orderedJSON.stringify(doc.data(), {order:["Name", "Category", "Price", "Quantity", "Description"]})
                const output = JSON.parse(json)
                product.push(output)
            }
        })

        await db.collection("Category").get().then(querysnapshot => {
            let docs = querysnapshot.docs

            for (let doc of docs) {
                const json = orderedJSON.stringify(doc.data(), {order:["Name"]})
                const output = JSON.parse(json)
                category.push(output)
            }
        })

        const productCategory = { "product": product, "category": category }
        return res.status(200).send(productCategory)
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = { get }