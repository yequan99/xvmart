import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import { OrderProps } from "../../types/mainTypes"

export default function OrderItems({ cartItems, setAddedToCart }: { cartItems: OrderProps, setAddedToCart: Dispatch<SetStateAction<OrderProps[]>> }) {

    const [quantity, setQuantity] = useState<number>(1)

    useEffect(() => {
        setAddedToCart((prevItems) =>
            prevItems.map((item) =>
                item.Name === cartItems.Name ? { ...item, Quantity: quantity } : item
            )
        )
        // eslint-disable-next-line 
    }, [quantity])

    const decrementCounter = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    const incrementCounter = () => {
        if (quantity < cartItems.MaxQuantity) {
            setQuantity(quantity + 1)
        }
    }

    return (
        <div className="py-4 flex flex-row w-full h-36 pl-4 items-center justify-between hover:bg-slate-50 rounded-lg">
            <div className="flex flex-row w-[75%]">
                <div className="h-28 w-28 bg-orange-100 flex justify-center items-center rounded-lg">
                    {/* eslint-disable-next-line */}
                    <img className="h-[80%]" src={cartItems.ImageURL} />
                </div>
                <div className="flex flex-col pl-4 lg:pl-8 w-[50%] gap-3 justify-center">
                    <div className="font-bold text-md lg:text-xl">
                        {cartItems.Name}
                    </div>
                    <div className="text-xs lg:text-sm italic text-gray-500">
                        {cartItems.Description}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-3 pr-2 items-center">
                <div className="font-bold text-md">
                    ${cartItems.Price}
                </div>
                <div className="border-2 border-slate-300 rounded-lg flex justify-between w-16 lg:w-24">
                    <h1 className="pl-2 cursor-pointer" onClick={decrementCounter}>-</h1>
                    <h1>{quantity}</h1>
                    <h1 className="pr-2 cursor-pointer" onClick={incrementCounter}>+</h1>
                </div>
            </div>
        </div>
    )
}