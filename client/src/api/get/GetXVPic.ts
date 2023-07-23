import { Dispatch, SetStateAction } from 'react'
import { ApiProps } from '../../types/mainTypes'

export default async function GetXVPic(setBackendData: Dispatch<SetStateAction<ApiProps>>) {
    const response = await fetch("/xvpic", {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await response.json()
    setBackendData((prevState) => ({ ...prevState, ["xvmart"]: data.xvmart }))
}