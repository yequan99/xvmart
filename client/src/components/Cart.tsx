import { useState } from 'react'
import { Link } from "react-router-dom";
import OrderItems from './OrderItems'

export default function Cart() {

    const [orders, setOrders] = useState([
        { Name: "Samyang", Price: 3.40, Quantity: 1 },
        { Name: "Milo", Price: 0.80, Quantity: 1 },
        { Name: "Indomee", Price: 1.2, Quantity: 1 },
    ])

    const items = [
        {
            Name: "Samyang",
            Category: "Cup Noodles",
            Price: 3.40,
            Quantity: 12,
            Description: "Carbonara flavour"
        },
        {
            Name: "Milo",
            Category: "Drinks",
            Price: 0.80,
            Quantity: 8,
            Description: "Milo packet"
        },
        {
            Name: "Indomee",
            Category: "Cup Noodles",
            Price: 1.20,
            Quantity: 12,
            Description: "Original flavour"
        },
    ]

    const totalCost = Math.round(orders.reduce((accumulator, item) => accumulator + item.Price * item.Quantity, 0) * 10) / 10

    return (
        <div className="container m-auto h-screen mt-24">
            <div className="flex flex-row justify-between w-[8%] pb-4">
                <Link to="/"><h1 >Home</h1></Link>
                <h1>/</h1>
                <h1 className="font-bold">Cart</h1>
            </div>
            <div className="flex flex-row h-full w-full">
                <div className="w-[65%] h-full">
                    <div className="h-fit w-[98%] border-2 border-slate-300 rounded-lg">
                        <div className="m-4">
                            <h1 className="font-bold text-xl pl-4">Review items</h1>
                            {items.map((item,index) => (
                                <OrderItems key={index} cartItems={item} setOrders={setOrders} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-[35%] h-full">
                    <div className="h-fit w-full border-2 border-slate-300 rounded-lg">
                        <div className="m-4 px-4">
                            <h1 className="font-bold text-xl">Order Summary</h1>
                            <div className="flex justify-between pt-4">
                                <h1>Total Amount: </h1>
                                <h1>${totalCost}0</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}