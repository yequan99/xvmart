const express = require('express')
const firebase = require('firebase')
require("dotenv").config();
const app = express();
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

app.get('/', (req, res) => {
    (async() => {
        try {
            let response = []

            await db.collection("Product").get().then(querysnapshot => {
                let docs = querysnapshot.docs

                for (let doc of docs) {
                    response.push(doc.data())
                }

                const product = { "product": response }
    
                return res.status(200).send(product)
            })
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