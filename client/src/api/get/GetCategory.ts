import { Dispatch, SetStateAction } from 'react'
import { ApiProps } from '../../types/mainTypes'

export default async function GetCategory(setBackendData: Dispatch<SetStateAction<ApiProps>>) {
    const response = await fetch("/category", {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await response.json()
    setBackendData((prevState) => ({ ...prevState, "category": data.category }))
}