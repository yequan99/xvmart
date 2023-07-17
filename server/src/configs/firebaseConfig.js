const admin = require("firebase-admin")
const { stringify } = require("ordered-json")
require("dotenv").config()

const cert = stringify(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)
const serviceAccountcert = JSON.parse(cert)

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountcert),
    storageBucket: process.env.STORAGE_BUCKET
})

const db = admin.firestore()
const bucket = admin.storage().bucket()

module.exports = { db, bucket }