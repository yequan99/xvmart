import { Dispatch, SetStateAction } from 'react'
import { Link } from "react-router-dom";
import OrderItems from './OrderItems'
import SubmitOrderForm from './SubmitOrderForm';
import { OrderProps, PhoneProps } from "../../types/mainTypes"

export default function Cart({cartItems, setAddedToCart, qrcode, phoneNumber}: { cartItems: OrderProps[], setAddedToCart: Dispatch<SetStateAction<OrderProps[]>>, qrcode: string, phoneNumber: PhoneProps }) {

    const totalCost = Math.round(cartItems.reduce((accumulator, item) => accumulator + item.Price * item.Quantity, 0) * 10) / 10

    return (
        <div className="container m-auto h-fit mt-16 md:mt-20 lg:mt-24 px-4 md:px-0">
            <div className="flex flex-row justify-between w-[25%] lg:w-[8%] pb-4">
                <Link to="/"><h1 >Home</h1></Link>
                <h1>/</h1>
                <h1 className="font-bold">Cart</h1>
            </div>
            <div className="flex flex-col lg:flex-row h-full w-full">
                <div className="w-full h-fit pb-4 lg:w-[65%] lg:h-full">
                    <div className="h-fit w-full lg:w-[98%] border-2 border-slate-300 rounded-lg">
                        <div className="m-1 lg:m-4">
                            <h1 className="font-bold text-lg lg:text-xl pt-2 lg:pt-0 pl-4">Review items</h1>
                            {cartItems.map((item,index) => (
                                item.Quantity > 0 && <OrderItems key={index} cartItems={item} setAddedToCart={setAddedToCart} /> 
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full h-fit lg:w-[35%] lg:h-full">
                    <div className="h-fit w-full border-2 border-slate-300 rounded-lg">
                        <div className="m-4 px-4">
                            <h1 className="font-bold text-lg lg:text-xl">Order Summary</h1>
                            <div className="flex justify-between pt-4">
                                <h1>Total Amount: </h1>
                                <h1>${totalCost}</h1>
                            </div>
                            {
                                totalCost !== 0 &&
                                <div className="mt-4">
                                    <SubmitOrderForm cartItems={cartItems} qrcode={qrcode} phoneNumber={phoneNumber.PhoneNumber} />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}