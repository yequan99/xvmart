import { PhoneProps } from "../../types/mainTypes"

export default async function UpdateNumber(phoneNumber: PhoneProps) {
    try {
        const response = await fetch('/updatePhone', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ phoneNumber }),
        })

        if (response.ok) {
            console.log("[Update Number (Client)] Data sent successfully")
        } else {
            console.log("[Update Number (Client)] Failed to send data")
        }
    } catch (error) {
        console.log("[Update Number (Client)] Network error: %s", error)
    }
}