import { ProductProps } from "../../types/mainTypes"

export default async function UpdateProduct(product: ProductProps) {
    try {
        const response = await fetch('https://xvmart-api.vercel.app/updateProduct', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ product }),
        })

        if (response.ok) {
            console.log("[Update Product (Client)] Data sent successfully")
        } else {
            console.log("[Update Product (Client)] Failed to send data")
        }
        setTimeout(() => window.location.reload(), 3000)
    } catch (error) {
        console.log("[Update Product (Client)] Network error: %s", error)
    }
}