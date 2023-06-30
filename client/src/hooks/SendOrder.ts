import { SendOrderProps } from "../types/mainTypes";

const SendOrder = async (sendOrder: SendOrderProps[], navigate: Function) => {
    try {
        const response = await fetch('/cart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ sendOrder }),
        });
  
        if (response.ok) {
          console.log('Data sent successfully!');
        } else {
          console.error('Failed to send data!');
        }
        setTimeout(() => navigate("/"), 3000)
    } catch (error) {
        console.error('Network error:', error);
    }
}

export { SendOrder }