const { db } = require('../../configs/firebaseConfig')

async function get(req, res) {
    try {
        var number = {}

        const numberRef = db.collection('Number')
        const numberSnapshot = await numberRef.get()
        numberSnapshot.forEach(doc => {
            let numberItem = doc.data()
            numberItem.ID = doc.id
            number = numberItem
        })

        const numberRes = { "number": number }
        return res.status(200).send(numberRes)
    } catch (error) {
        console.log("[GET Number Controller] Error getting request: %s", error)
        return res.status(500).send(error)
    }
}

module.exports = { get }