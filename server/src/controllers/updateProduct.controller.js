const db = require('../configs/firebasConfig')

async function update(req,res) {
    try {
        const data = req.body.product
        console.log("received data:", data)

        db.collection("Product").doc(data.ID).update({ 
            "Name": data.Name,
            "Category": data.Category,
            "Price": data.Price,
            "Quantity": data.Quantity,
            "Description": data.Description
        })

        res.sendStatus(200)
    } catch (error) {
        console.error("Error while deleting order", error)
    }
}

module.exports = { update }