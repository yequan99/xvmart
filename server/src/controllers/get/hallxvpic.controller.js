const { bucket } = require('../../configs/firebaseConfig')

async function get(req, res) {
    try {
        const [files] = await bucket.getFiles({ prefix: 'hallxv/' + 'hallxvpic' })

        const xvpicURL = await files[0].getSignedUrl({
            action: 'read',
            expires: '03-17-2025',
        })
        const hallxvpic = xvpicURL[0]

        const xvpicRes = { "xvmart": hallxvpic }
        return res.status(200).send(xvpicRes)
    } catch (error) {
        console.log("[Hall XV Pic Controller] Error getting request: %s", error)
        return res.status(500).send(error)
    }
}

module.exports = { get }