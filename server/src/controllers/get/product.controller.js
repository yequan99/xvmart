const orderedJSON = require("ordered-json")
const { db, bucket } = require('../../configs/firebaseConfig')

async function get(req, res) {
    try {
        let product = []

        const productRef = db.collection('Product')
        const productSnapshot = await productRef.get()
        productSnapshot.forEach(doc => {
            let productItem = doc.data()
            productItem.ID = doc.id
            const productString = orderedJSON.stringify(productItem, {order:["ID", "Name", "Category", "Price", "Quantity", "Description", "Picture_Name"]})
            const productJSON = JSON.parse(productString)
            product.push(productJSON)
        })

        for (const item of product) {
            try {
                const [files] = await bucket.getFiles({ prefix: 'products/' + item.Picture_Name })

                const downloadURL = await files[0].getSignedUrl({
                    action: 'read',
                    expires: '03-17-2025', // Set the desired expiration date
                })
                item["ImageURL"] = downloadURL[0]
            } catch (error) {
                item["ImageURL"] = ""
                console.log("[GET Product Controller] Cannot get image for %s", item.Picture_Name)
            }
        }
        
        const productRes = { "product": product }
        // console.log(productRes)
        return res.status(200).send(productRes)
    } catch (error) {
        console.log("[GET Product Controller] Error getting request: %s", error)
        return res.status(500).send(error)
    }
}

module.exports = { get }