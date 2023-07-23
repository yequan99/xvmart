const { db } = require('../../configs/firebaseConfig')

async function update(req,res) {
    try {
        const data = req.body.product
        console.log("[POST Product Controller] Received request for: %s", data)

        db.collection("Product").doc(data.ID).update({ 
            "Name": data.Name,
            "Category": data.Category,
            "Price": data.Price,
            "Quantity": data.Quantity,
            "Description": data.Description
        })

        res.sendStatus(200)
    } catch (error) {
        console.error("[POST Product Controller] Error updating request: %s", error)
    }
}

module.exports = { update }