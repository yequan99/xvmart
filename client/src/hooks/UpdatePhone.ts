import { PhoneProps } from "../types/mainTypes"

const UpdatePhone = async (phoneNumber: PhoneProps) => {
    try {
        const response = await fetch('/updatePhone', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ phoneNumber }),
        })

        if (response.ok) {
            console.log("Data sent successfully!")
        } else {
            console.error("Failed to send data!")
        }
    } catch (error) {
        console.error("Network error:", error)
    }
}

export { UpdatePhone }