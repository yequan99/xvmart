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
        <div className="py-4 flex flex-row h-36 pl-4 items-center justify-between hover:bg-slate-50 rounded-lg">
            <div className="flex flex-row">
                <div className="h-28 w-28 bg-orange-100 flex justify-center items-center rounded-lg">
                    Image here
                </div>
                <div className="flex flex-col pl-8 gap-3 justify-center">
                    <div className="font-bold text-xl">
                        {cartItems.Name}
                    </div>
                    <div className="text-sm italic text-gray-500">
                        {cartItems.Description}
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center gap-3 pr-4 items-center">
                <div className="font-bold">
                    ${cartItems.Price}
                </div>
                <div className="border-2 border-slate-300 rounded-lg flex justify-between w-24">
                    <h1 className="pl-2 cursor-pointer" onClick={decrementCounter}>-</h1>
                    <h1>{quantity}</h1>
                    <h1 className="pr-2 cursor-pointer" onClick={incrementCounter}>+</h1>
                </div>
            </div>
        </div>
    )
}