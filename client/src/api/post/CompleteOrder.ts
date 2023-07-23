import { GetOrderProps } from '../../types/mainTypes'

export default async function CompleteOrder(order: GetOrderProps) {
    try {
        const response = await fetch('/completeOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ order }),
        })

        if (response.ok) {
            console.log("[Complete Order (Client)] Data sent successfully")
        } else {
            console.log("[Complete Order (Client)] Failed to send data")
        }
        setTimeout(() => window.location.reload(), 3000)
    } catch (error) {
        console.log("[Complete Order (Client)] Network error: %s", error)
    }
}