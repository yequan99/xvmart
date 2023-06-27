import { ProductProps } from "../../types/mainTypes"

export default function EditProducts({ products }: { products: ProductProps[] }) {
    return (
        <div>
            <div className="bg-blue-100 py-2 px-4 mb-2 rounded-lg flex justify-center items-center">
                <h1>
                    This page shows the list of all existing products and its details. This page is meant for you to edit any details of such existing products.
                    Click on the respective cards to edit details for that item.
                </h1>
            </div>
            {products.map((item,index) => (
                item.Name
            ))}
        </div>
    )
}