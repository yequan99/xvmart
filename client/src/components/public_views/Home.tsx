import { Dispatch, SetStateAction } from "react"
import Cards from './Cards'
import { ProductProps, OrderProps } from '../../types/mainTypes'

export default function Home({apiData, selectedCategory, setAddedToCart, xvmartpic }: {apiData: ProductProps[], selectedCategory: string, setAddedToCart: Dispatch<SetStateAction<OrderProps[]>>, xvmartpic: string }) {

    return (
        <div className="container m-auto h-screen mt-16 md:mt-20 lg:mt-24 px-4 md:px-0">
            <div className="flex mt-4 h-28 md:h-48 rounded-md overflow-hidden">
                {/* eslint-disable-next-line */}
                <img className="w-full md:h-fit rounded-md" src={xvmartpic} />
            </div>
            <div className="text-sm md:text-lg mt-4 lg:mt-8">hello, late night cravings</div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 py-4 md:py-8">
                {apiData.map((item,index) => (
                    (item.Category === selectedCategory || selectedCategory === "All") &&
                    <Cards key={index} item={item} setAddedToCart={setAddedToCart} />
                ))}
            </div>
        </div>
    )
}