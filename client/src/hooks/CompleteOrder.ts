import { GetOrderProps } from '../types/mainTypes'

const CompleteOrders = async (order: GetOrderProps) => {
    try {
        const response = await fetch('/completeOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ order }),
        })

        if (response.ok) {
            console.log("Data sent successfully!")
        } else {
            console.error("Failed to send data!")
        }
        setTimeout(() => window.location.reload(), 3000)
    } catch (error) {
        console.error("Network error:", error)
    }
}

export { CompleteOrders }