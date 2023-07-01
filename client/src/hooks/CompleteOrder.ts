import { getFirestore, doc, deleteDoc, setDoc } from 'firebase/firestore'
import { app } from '../firebase'
import { GetOrderProps, ProductProps } from '../types/mainTypes'

const CompleteOrders = async (order: GetOrderProps, products: ProductProps[]) => {

    const db = getFirestore(app)

    products.forEach(function(item) {
        if (item.Name === order.Item && item.Description === order.Description) {
            const docRef1 = doc(db, "Product", item.ID)

            const data = { Name: item.Name, Category: item.Category, Price: item.Price, Quantity: item.Quantity - order.Quantity, Description: item.Description}
            setDoc(docRef1, data)
                .then(docRef1 => {
                    console.log("Entire Document has been updated successfully");
                })
                .catch(error => {
                    console.log(error);
                })
        }
    })

    const docRef2 = doc(db, "Orders", order.ID)
    deleteDoc(docRef2)
        .then(() => {
            console.log("Entire Document has been deleted successfully.")
        })
        .catch(error => {
            console.log(error);
        })
    setTimeout(() => window.location.reload(), 3000)
}

export { CompleteOrders }