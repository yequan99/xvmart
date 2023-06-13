import { Dispatch, SetStateAction, useState } from 'react'
import { productProps } from '../types/mainTypes'

export default function Cards({ item, setAddedToCart }: { item: productProps, setAddedToCart: Dispatch<SetStateAction<string>> }) {

    const [added, setAdded] = useState<boolean>(false)
    const [buttonText, setButtonText] = useState<string>("Add to Cart")

    const handleClick = () => {
        setAddedToCart(item.Name)
        setAdded(!added)
        if (added) {
            setButtonText("Add to Cart")
        }
        else {
            setButtonText("Added to Cart!")
        }
    }

    return (
        <div className="h-76">
            <div className="rounded-md bg-orange-100 h-48 flex justify-center items-center">
                Image here
            </div>
            <div className="relative h-28">
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
                    <button 
                        className={`font-bold py-1 px-3 rounded-full border-2 border-green-700 ${added ? "bg-green-700 text-white" : "bg-transparent hover:bg-green-700 text-green-700 hover:text-white"} `}
                        onClick={handleClick}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>

    )
}