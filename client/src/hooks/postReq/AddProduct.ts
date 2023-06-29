import { ProductProps } from "../../types/mainTypes"


const AddProduct = async (productDetail: ProductProps, navigate: Function) => {
    try {
        const response = await fetch('/addProduct', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ productDetail }),
        });
  
        if (response.ok) {
          console.log('Data sent successfully!');
        } else {
          console.error('Failed to send data!');
        }
        setTimeout(() => navigate("/admin"), 3000)
    } catch (error) {
        console.error('Network error:', error);
    }
}

export { AddProduct }