import { useState, useEffect } from 'react'
import { GetOrderProps } from '../../types/mainTypes'
import GetOrders from '../../hooks/GetOrders'

export default function ViewOrders() {

    const [order, setOrder] = useState<GetOrderProps[]>([])

    useEffect(() => {
        GetOrders(setOrder)
    }, [])

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
                        <th>Date</th>
                        <th>Order</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {order.map((item,index) => (
                        <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.Block}-{item.Level}-{item.Unit}</td>
                            <td>{item.Date}</td>
                            <td>hello</td>
                            <td>1961</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}