export default async function DeleteCall<T>(item: T, type: string) {
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
                console.log("[Delete Product (Client)] Data sent successfully");
            } else {
                console.error("[Delete Product (Client)] Failed to send data");
            }
            setTimeout(() => window.location.reload(), 3000)
        } catch (error) {
            console.error("[Delete Product (Client)] Network error: %s", error);
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
                console.log("[Delete Cateogory (Client)] Data sent successfully");
            } else {
                console.error("[Delete Cateogory (Client)] Failed to send data");
            }
            setTimeout(() => window.location.reload(), 3000)
        } catch (error) {
            console.error("[Delete Cateogory (Client)] Network error: %s", error);
        }
    }
}