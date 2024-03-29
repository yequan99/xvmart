import { AddCategoryProps } from "../../types/mainTypes"

export default async function AddCategory(category: AddCategoryProps){
// const AddCategory = async (category: AddCategoryProps) => {
    try {
        const response = await fetch('https://xvmart-api.vercel.app/addCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ category }),
        });

        if (response.ok) {
            console.log("[Add Category (Client)] Data sent successfully");
        } else {
            console.error("[Add Category (Client)] Failed to send data");
        }
        setTimeout(() => window.location.reload(), 3000)
    } catch (error) {
        console.log("[Add Category (Client)] Network error: %s", error);
    }
}