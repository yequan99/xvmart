import { Dispatch, SetStateAction } from 'react'
import { ApiProps } from '../../types/mainTypes'

export default async function GetProduct(setBackendData: Dispatch<SetStateAction<ApiProps>>) {
    const response = await fetch("/product", {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await response.json()
    setBackendData((prevState) => ({ ...prevState, ["product"]: data.product }))
}