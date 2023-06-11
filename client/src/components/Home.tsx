import { useState } from 'react';
import { apiProps } from '../types/mainTypes';
import Container from './Container';
import Topbar from './Topbar'

export default function Home({backendData}: {backendData: apiProps}) {

    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    return (
        <>
            <Topbar categories={backendData.category} setSelectedCategory={setSelectedCategory} />
            <Container apiData={backendData.product} selectedCategory={selectedCategory} />
        </>
    )
}