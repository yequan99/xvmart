const { bucket } = require('../../configs/firebaseConfig')

async function get(req, res) {
    try {
        const [files] = await bucket.getFiles({ prefix: 'qrcode/' + 'qrcode' })

        const qrcodeURL = await files[0].getSignedUrl({
            action: 'read',
            expires: '03-17-2025',
        })
        const qrcode = qrcodeURL[0]

        const qrcodeRes = { "qrcode": qrcode }
        return res.status(200).json(qrcodeRes)
    } catch (error) {
        console.log("[QR Code Controller] Error getting request: %s", error)
        return res.status(500).send(error)
    }
}

module.exports = { get }