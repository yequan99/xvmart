import { useState } from "react"
import Cards from './Cards'
import { productProps } from '../types/mainTypes'

export default function Home({apiData, selectedCategory}: {apiData: productProps[], selectedCategory: string}) {

    const [addedToCart, setAddedToCart] = useState("")

    return (
        <div className="container m-auto h-screen mt-24">
            <div className="flex mt-4 h-48 rounded-md bg-orange-100 items-center justify-center">
                Hall XV pic here
            </div>
            <div className="mt-8">hello, late night cravings</div>
            <div>{addedToCart}</div>
            <div className="grid grid-cols-4 gap-x-4 gap-y-8 py-8">
                {apiData.map((item,index) => (
                    (item.Category === selectedCategory || selectedCategory === "All") &&
                    <Cards key={index} item={item} setAddedToCart={setAddedToCart} />
                ))}
            </div>
        </div>
    )
}