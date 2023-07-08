import { CategoryProps } from "../types/mainTypes"


const DeleteCategory = async (category: CategoryProps) => {
  try {
      const response = await fetch('/deleteCategory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category }),
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

export { DeleteCategory }