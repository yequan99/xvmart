const express = require('express')
const firebase = require('firebase')
require("dotenv").config();
const app = express();
const orderedJSON = require("ordered-json");

const PORT = process.env.PORT || 5001

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()

app.get('/product', (req, res) => {
    (async() => {
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

            const xvmart = { "product": product, "category": category }
            return res.status(200).send(xvmart)
        } catch (error) {
            return res.status(500).send(error)
        }
    })()
})

app.get("/api", (req, res) => {
    res.json({ "users": ["userOne", "userTwo", "userThree", "userFour"]})
})

app.get("/hello", (req, res) => {
    res.json({ message: "Hello from server!" })
})

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`) })