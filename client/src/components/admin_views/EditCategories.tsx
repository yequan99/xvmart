import { CategoryProps } from "../../types/mainTypes"
import EditCategoriesPopup from "./EditCategoriesPopup"
import DeleteCategories from "./DeleteCategories"

export default function EditCategories({ categories }: { categories: CategoryProps[] }) {
    return (
        <div>
            <div className="bg-blue-100 py-2 px-4 mb-2 rounded-lg flex justify-center items-center">
                <h1>
                    This page shows the list of all existing categories. This page is meant for you to edit any names of such existing categories.
                    Click on the respective buttons to edit/delete that category.
                </h1>
            </div>
            <table className="mt-4 table-auto w-full">
                <thead>
                    <tr className="text-left uppercase bg-slate-200">
                        <th>Category Name</th>
                        <th className="text-center">Edit</th>
                        {/* <th className="text-center">Delete</th> */}
                    </tr>
                </thead>
                <tbody>
                    {categories.map((item,index) => (
                        item.Name !== "All" &&
                        <tr key={index} className="bg-slate-50 hover:bg-slate-100">
                            <td className="py-1">{item.Name}</td>
                            <td className="pt-2">
                                <div className="flex flex-row w-full justify-center gap-4">
                                    <EditCategoriesPopup item={item} />
                                    <DeleteCategories item={item} />
                                </div>
                            </td>
                        </tr>
                    
                    ))}
                </tbody>
            </table>
        </div>
    )
}