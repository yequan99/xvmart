import { getFirestore, doc, deleteDoc } from 'firebase/firestore'
import { app } from '../firebase'
import { GetOrderProps } from '../types/mainTypes'

const CompleteOrders = async (order: GetOrderProps) => {

    const db = getFirestore(app)
    const docRef = doc(db, "Orders", order.ID)
    deleteDoc(docRef)
        .then(() => {
            console.log("Entire Document has been deleted successfully.")
        })
        .catch(error => {
            console.log(error);
        })
    setTimeout(() => window.location.reload(), 3000)
}

export { CompleteOrders }