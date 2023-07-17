const orderedJSON = require("ordered-json")
const { db, bucket } = require('../configs/firebaseConfig')

async function get(req, res) {
    try {
        let product = []
        let category = []

        // const productRef = db.collection('Product')
        // const productSnapshot = await productRef.get()
        // productSnapshot.forEach(doc => {
        //     let productItem = doc.data()
        //     productItem.ID = doc.id
        //     console.log(productItem)
        // })

        await db.collection("Product").get().then(querysnapshot => {
            querysnapshot.forEach((doc) => {
                const json = orderedJSON.stringify(doc.data(), {order:["Name", "Category", "Price", "Quantity", "Description", "Product_Name"]})
                const output = JSON.parse(json)
                output["ID"] = doc.id
                output["ImageURL"] = ""
                product.push(output)
            })
        })

        await db.collection("Category").orderBy('Name').get().then(querysnapshot => {
            querysnapshot.forEach((doc) => {
                const json = orderedJSON.stringify(doc.data(), {order:["Name"]})
                const output = JSON.parse(json)
                output["ID"] = doc.id
                category.push(output)
            })
        })

        var phoneNumber = {}

        await db.collection("Number").get().then(querysnapshot => {
            querysnapshot.forEach((doc) => {
                const json = orderedJSON.stringify(doc.data(), {order:["PhoneNumber"]})
                const output = JSON.parse(json)
                output["ID"] = doc.id
                phoneNumber = output
            })
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
                console.log("no photo")
                console.log(item)
                item["ImageURL"] = ""
            }
        }

        var qrcode = ""

        try {
            const [files] = await bucket.getFiles({ prefix: 'qrcode/' + 'qrcode' })

            const qrcodeURL = await files[0].getSignedUrl({
                action: 'read',
                expires: '03-17-2025',
            })
            qrcode = qrcodeURL[0]
        } catch (error) {
            console.log("No QR Code")
        }

        var hallxvpic = ""

        try {
            const [files] = await bucket.getFiles({ prefix: 'hallxv/' + 'hallxvpic' })

            const qrcodeURL = await files[0].getSignedUrl({
                action: 'read',
                expires: '03-17-2025',
            })
            hallxvpic = qrcodeURL[0]
        } catch (error) {
            console.log("No XV Mart pic")
        }

        const productCategory = { "product": product, "category": category, "qrcode": qrcode, "xvmart": hallxvpic, "number": phoneNumber }
        return res.status(200).send(productCategory)
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = { get }