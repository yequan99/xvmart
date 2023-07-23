import { AddProductProps } from "../../types/mainTypes"

export default async function AddProduct(product: AddProductProps) {
    try {
        const response = await fetch('https://xvmart-api.vercel.app/addProduct', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({ product }),
        });

        if (response.ok) {
            console.log("[Add Product (Client)] Data sent successfully");
        } else {
            console.error("[Add Product (Client)] Failed to send data");
        }
        setTimeout(() => window.location.reload(), 3000)
    } catch (error) {
        console.log("[Add Product (Client)] Network error: %s", error);
    }
}