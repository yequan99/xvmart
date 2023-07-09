import { AddProductProps } from "../types/mainTypes"


const AddProduct = async (product: AddProductProps) => {
  try {
    const response = await fetch('/addProduct', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ product }),
    });

    if (response.ok) {
      console.log('Data sent successfully!');
    } else {
      console.error('Failed to send data!');
    }
    setTimeout(() => window.location.reload(), 3000)
  } catch (error) {
      console.error('Network error:', error);
  }
}

export { AddProduct }