import { CategoryProps } from "../../types/mainTypes"

export default async function UpdateCategory(category: CategoryProps) {
    try {
        const response = await fetch('/updateCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ category }),
        })

        if (response.ok) {
            console.log("[Update Category (Client)] Data sent successfully")
        } else {
            console.log("[Update Category (Client)] Failed to send data")
        }
        setTimeout(() => window.location.reload(), 3000)
    } catch (error) {
        console.log("[Update Category (Client)] Network error: %s", error)
    }
}