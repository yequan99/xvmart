import { Dispatch, SetStateAction } from 'react'
import { GetOrderProps } from '../../types/mainTypes'

export default async function GetOrder(setOrder: Dispatch<SetStateAction<GetOrderProps[]>>) {
    const response = await fetch("https://xvmart-api.vercel.app/order", {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await response.json()
    setOrder(data.order)
}