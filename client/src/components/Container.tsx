import Cards from './Cards'
import { productProps } from '../types/mainTypes'

export default function Container({apiData, selectedCategory}: {apiData: productProps[], selectedCategory: string}) {

    // const items = [
    //     {
    //         Name: "Samyang",
    //         Category: "Cup Noodles",
    //         Price: 3.4,
    //         Quantity: 12,
    //         Description: "Carbonara flavour"
    //     },
    //     {
    //         Name: "Hello",
    //         Category: "Drinks",
    //         Price: 0.8,
    //         Quantity: 8,
    //         Description: "Milo packet"
    //     },
    //     {
    //         Name: "Samyang Samyang Samyang Samyang",
    //         Category: "Cup Noodles",
    //         Price: 3.4,
    //         Quantity: 12,
    //         Description: "Carbonara flavour"
    //     },
    // ]

    return (
        <div className="container m-auto h-screen mt-24">
            <div className="flex mt-4 h-48 rounded-md bg-orange-100 items-center justify-center">
                Hall XV pic here
            </div>
            <div className="mt-8">hello, late night cravings</div>
            <div className="grid grid-cols-4 gap-4 mt-8">
                {apiData.map((item,index) => (
                    (item.Category === selectedCategory || selectedCategory === "All") &&
                    <Cards key={index} item={item} />
                ))}
            </div>
        </div>
    )
}