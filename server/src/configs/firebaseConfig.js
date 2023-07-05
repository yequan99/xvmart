const admin = require("firebase-admin")
const serviceAccount = require("./serviceAccountKey.json")
require("dotenv").config()

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.STORAGE_BUCKET
})

const db = admin.firestore()
const bucket = admin.storage().bucket()

module.exports = { db, bucket }