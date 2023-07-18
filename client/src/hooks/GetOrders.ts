import { Dispatch, SetStateAction } from 'react'
import { GetOrderProps } from '../types/mainTypes'

export default async function GetOrders(setOrders: Dispatch<SetStateAction<GetOrderProps[]>>) {
    const response = await fetch("/orders", {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await response.json()
    setOrders(data.orders)
}