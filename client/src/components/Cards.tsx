import Counter from './Counter'
import { productProps } from '../types/mainTypes'

export default function Cards({item}:{item: productProps}) {
    return (
        <div className="h-80">
            <div className="rounded-md bg-orange-100 h-48">
                
            </div>
            <div className="relative h-32">
                <div className="flex flex-row justify-between items-center">
                    <div className="w-[75%] break-words font-bold">
                        {item.Name} 
                    </div>
                    <div>
                        ${item.Price}
                    </div>
                </div>
                <div className="text-sm italic pt-2">
                    {item.Description}
                </div>
                <div className="absolute bottom-0">
                    <div className="flex flex-row justify-between items-center pb-2">
                        <button className="bg-transparent border-2 border-green-700 hover:bg-green-700 text-green-700 hover:text-white font-bold py-1 px-3 rounded-full">
                            Add to Cart
                        </button>
                        <div className="pl-16">
                            <Counter maxQuantity={item.Quantity} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}