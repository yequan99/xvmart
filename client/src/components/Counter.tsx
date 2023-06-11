import { useState } from "react"

export default function Counter({maxQuantity}:{maxQuantity: number}) {

    const [quantity, setQuantity] = useState(0)

    const IncrementQuantity = () => {
        if (quantity < maxQuantity) {
            setQuantity(quantity + 1)
        }
    }

    const DecrementQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        }
    }

    return (
        <div className="flex flex-row items-center">
            <button className="border-2 rounded-full border-slate-500 px-2" onClick={DecrementQuantity}>-</button>
            <div className="w-8 text-center">{quantity}</div>
            <button className="border-2 rounded-full border-slate-500 px-2" onClick={IncrementQuantity}>+</button>
        </div>
    )
}