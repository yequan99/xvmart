import { SendOrderProps } from "../../types/mainTypes";

export default async function SendOrder(sendOrder: SendOrderProps[], navigate: Function) {
    try {
        const response = await fetch('/cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ sendOrder }),
        });
  
        if (response.ok) {
            console.log("[Send order (Client)] Data sent successfully");
        } else {
            console.log("[Send order (Client)] Failed to send data");
        }
        setTimeout(() => navigate("/"), 3000)
    } catch (error) {
        console.log("[Send order (Client)] Network error: %s", error);
    }
}