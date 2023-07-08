import { ApiProps } from "../../types/mainTypes"
import EditProductsPopup from "./EditProductsPopup"
import DeleteProducts from "./DeleteProducts"

export default function EditProducts({ apiData }: { apiData: ApiProps }) {
    return (
        <div>
            <div className="bg-blue-100 py-2 px-4 mb-2 rounded-lg flex justify-center items-center">
                <h1>
                    This page shows the list of all existing products and its details. This page is meant for you to edit any details of such existing products.
                    Click on the respective buttons to edit/delete that product.
                </h1>
            </div>
            <table className="mt-4 table-auto w-full">
                <thead>
                    <tr className="text-left uppercase bg-slate-200">
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th className="text-center">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {apiData.product.map((item,index) => (
                        <tr key={index} className="bg-slate-50 hover:bg-slate-100">
                            <td className="py-1">{item.Name}</td>
                            <td>{item.Category}</td>
                            <td>{item.Price}</td>
                            <td>{item.Quantity}</td>
                            <td>{item.Description}</td>
                            <td className="flex justify-center pt-2">
                                <div className="flex flex-row w-full justify-center gap-4">
                                    <EditProductsPopup item={item} categories={apiData.category} />
                                    <DeleteProducts item={item} />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}