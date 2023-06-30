import { GetOrderProps } from '../../types/mainTypes'
import GetOrders from '../../hooks/GetOrders'

export default function ViewOrders() {

    const orders: GetOrderProps[] = GetOrders()

    console.log(orders)

    return (
        <div>
            <div className="bg-blue-100 py-2 px-4 mb-2 rounded-lg flex justify-center items-center">
                <h1>
                    This page shows the list of all existing orders. You can dismiss the order once complete. Once dismissed, database will automatically adjust quantity
                    of items available.
                </h1>
            </div>
        </div>
    )
}