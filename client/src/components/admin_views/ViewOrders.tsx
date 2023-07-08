import { useState, useEffect } from 'react'
import { GetOrderProps, ProductProps } from '../../types/mainTypes'
import GetOrders from '../../hooks/GetOrders'
import ConfirmOrderCompletion from './ConfirmOrderCompletion'

export default function ViewOrders({ products }: { products: ProductProps[] }) {

    const [order, setOrder] = useState<GetOrderProps[]>([])

    useEffect(() => {
        GetOrders(setOrder)
    }, [])

    const CalculatePrice = (price: number, quantity: number) => {
        return (Math.round(price * quantity * 10) / 10)
    }

    return (
        <div>
            <div className="bg-blue-100 py-2 px-4 mb-2 rounded-lg flex justify-center items-center">
                <h1>
                    This page shows the list of all existing orders. You can dismiss the order once complete. Once dismissed, database will automatically adjust quantity
                    of items available.
                </h1>
            </div>
            <table className="mt-4 table-auto w-full">
                <thead>
                    <tr className="text-left uppercase bg-slate-200">
                        <th>Name</th>
                        <th>Unit</th>
                        <th>Date (MM/DD/YYYY)</th>
                        <th>Order</th>
                        <th>Amount</th>
                        <th className="text-center">Complete</th>
                    </tr>
                </thead>
                <tbody>
                    {order.map((item,index) => (
                        <tr key={index} className="bg-slate-50 hover:bg-slate-100">
                            <td>{item.Name}</td>
                            <td>{item.Block}-{item.Level}-{item.Unit}</td>
                            <td>{item.Date}</td>
                            <td>{item.Quantity} x {item.Item} - {item.Description}</td>
                            <td>${CalculatePrice(item.Price, item.Quantity)}</td>
                            <td className="flex justify-center pt-2"><ConfirmOrderCompletion order={item} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}