import { useState, useEffect } from 'react'
import { GetOrderProps } from '../types/mainTypes'

export default function GetOrders() {

    const [orders, setOrders] = useState<GetOrderProps[]>([])

    useEffect(() => {
        fetch("/orders").then(
            response => response.json()
        ).then(
            data => {
                setOrders(data)
            }
        )
    }, [])

    return orders
}