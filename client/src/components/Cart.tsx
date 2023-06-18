import { Dispatch, SetStateAction } from 'react'
import { Link } from "react-router-dom";
import OrderItems from './OrderItems'
import SubmitOrderForm from './SubmitOrderForm';
import { OrderProps } from "../types/mainTypes"

export default function Cart({cartItems, setAddedToCart}: { cartItems: OrderProps[], setAddedToCart: Dispatch<SetStateAction<OrderProps[]>> }) {

    const totalCost = Math.round(cartItems.reduce((accumulator, item) => accumulator + item.Price * item.Quantity, 0) * 10) / 10

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
                            {cartItems.map((item,index) => (
                                item.Quantity > 0 && <OrderItems key={index} cartItems={item} setAddedToCart={setAddedToCart} /> 
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
                                <h1>${totalCost}</h1>
                            </div>
                            {
                                totalCost !== 0 &&
                                <div className="mt-4">
                                    <SubmitOrderForm cartItems={cartItems} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}