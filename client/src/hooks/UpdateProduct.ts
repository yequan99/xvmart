import { ProductProps } from "../types/mainTypes"
import { getFirestore, doc, setDoc } from 'firebase/firestore'
import { app } from '../firebase'

const UpdateProduct = (item: ProductProps) => {

    console.log(item)

    const db = getFirestore(app)
    const docRef = doc(db, "Product", item.ID)
    
    const data = { Name: item.Name, Category: item.Category, Price: item.Price, Quantity: item.Quantity, Description: item.Description}
    setDoc(docRef, data)
        .then(docRef => {
            console.log("Entire Document has been updated successfully");
        })
        .catch(error => {
            console.log(error);
        })

    setTimeout(() => window.location.reload(), 3000)
    
}

export { UpdateProduct }