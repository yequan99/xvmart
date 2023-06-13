import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import { apiProps } from './types/mainTypes';
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Home from './components/Home'

export default function App() {

  const [backendData, setBackendData] = useState<apiProps | null>()
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [cartCount, setCartCount] = useState<number>(0)

  useEffect(() => {
    fetch("/product").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof backendData?.product === 'undefined') ? (
        <p>Loading ...</p>
      ) : (
        <>
          <Navbar categories={backendData.category} setSelectedCategory={setSelectedCategory} cartCount={cartCount} />
          <Routes>
            <Route path="/" element={ <Home apiData={backendData.product} selectedCategory={selectedCategory} /> } />
            <Route path="/cart" element={ <Cart /> } />
          </Routes>
        </>

      )}
    </div>
  );
}