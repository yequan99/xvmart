import { Dispatch, SetStateAction } from 'react'
import { ApiProps } from '../types/mainTypes'

export default async function GetProducts(setBackendData: Dispatch<SetStateAction<ApiProps | null>>) {
    const response = await fetch("/product")
    const data = await response.json()
    setBackendData(data)
}