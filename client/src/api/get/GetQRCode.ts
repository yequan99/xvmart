import { Dispatch, SetStateAction } from 'react'
import { ApiProps } from '../../types/mainTypes'

export default async function GetQRCode(setBackendData: Dispatch<SetStateAction<ApiProps>>) {
    const response = await fetch("https://xvmart-api.vercel.app/qrcode", {
        headers : {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    const data = await response.json()
    setBackendData((prevState) => ({ ...prevState, "qrcode": data.qrcode }))
}