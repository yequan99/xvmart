const DeleteCall = async <T>(item: T, type: string) => {
    if (type === "product") {
        try {
            const response = await fetch('/deleteProduct', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ item }),
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
    } else if (type === "category") {
        try {
            const response = await fetch('/deleteCategory', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ item }),
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
}

export { DeleteCall }