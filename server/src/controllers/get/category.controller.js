const orderedJSON = require("ordered-json")
const { db } = require('../../configs/firebaseConfig')

async function get(req, res) {
    try {
        let category = []

        const categoryRef = db.collection('Category')
        const categorySnapshot = await categoryRef.orderBy('Name').get()
        categorySnapshot.forEach(doc => {
            let categoryItem = doc.data()
            categoryItem.ID = doc.id
            const categoryString = orderedJSON.stringify(categoryItem, {order:["Name"]})
            const categoryJSON = JSON.parse(categoryString)
            category.push(categoryJSON)
        })

        const categoryRes = { "category": category }
        console.log(categoryRes)
        return res.status(200).send(categoryRes)
    } catch (error) {
        console.log("[GET Category Controller] Error getting request: %s", error)
        return res.status(500).send(error)
    }
}

module.exports = { get }