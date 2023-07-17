const admin = require("firebase-admin")
require("dotenv").config()

const serviceAccountcert = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountcert),
    storageBucket: process.env.STORAGE_BUCKET
})

const db = admin.firestore()
const bucket = admin.storage().bucket()

module.exports = { db, bucket }