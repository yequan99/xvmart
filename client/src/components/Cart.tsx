import { useState } from 'react';
import { apiProps } from '../types/mainTypes'
import Topbar from './Topbar'
import Orders from './Orders'

export default function Cart({backendData}: {backendData: apiProps}) {

    // eslint-disable-next-line 
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    return (
        <>
            <Topbar categories={backendData.category} setSelectedCategory={setSelectedCategory} />
            <Orders />
        </>
    )
}