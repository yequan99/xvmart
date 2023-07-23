import { Dispatch, SetStateAction } from 'react'
import { ApiProps } from '../../types/mainTypes'

export default async function GetNumber(setBackendData: Dispatch<SetStateAction<ApiProps>>) {
    const response = await fetch("/number", {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await response.json()
    setBackendData((prevState) => ({ ...prevState, ["number"]: data.number }))
}