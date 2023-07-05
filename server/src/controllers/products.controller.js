const orderedJSON = require("ordered-json")
const { db, bucket } = require('../configs/firebaseConfig')

async function get(req, res) {
    try {
        let product = []
        let category = []

        await db.collection("Product").get().then(querysnapshot => {
            querysnapshot.forEach((doc) => {
                const json = orderedJSON.stringify(doc.data(), {order:["Name", "Category", "Price", "Quantity", "Description", "Product_Name"]})
                const output = JSON.parse(json)
                output["ID"] = doc.id
                output["ImageURL"] = ""
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

        for (const item of product) {
            const [files] = await bucket.getFiles({ prefix: 'products/' + item.Picture_Name })

            const downloadURL = await files[0].getSignedUrl({
                action: 'read',
                expires: '03-17-2025', // Set the desired expiration date
            })
            item["ImageURL"] = downloadURL[0]
        }

        const productCategory = { "product": product, "category": category }
        return res.status(200).send(productCategory)
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = { get }