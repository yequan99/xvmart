import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import { ApiProps, OrderProps } from './types/mainTypes';
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Login from './components/Login'
import Admin from './components/Admin'

export default function App() {

  const [backendData, setBackendData] = useState<ApiProps | null>()
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [addedToCart, setAddedToCart] = useState<OrderProps[]>([])

  useEffect(() => {
    fetch("/product").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  useEffect(() => {
    if (typeof backendData?.product != "undefined") {
      setAddedToCart(backendData.product.map((item) => (
          { Name: item.Name, Price: item.Price, Quantity: 0, MaxQuantity: item.Quantity, Description: item.Description }
      )))
    }
    // eslint-disable-next-line 
  }, [backendData])

  const cartCount = addedToCart.reduce((accumulator, item) => accumulator + (item.Quantity > 0 ? 1 : 0), 0)

  return (
    <div>
      {(typeof backendData?.product === 'undefined') ? (
        <p>Loading ...</p>
      ) : (
        <>
          <Navbar categories={backendData.category} setSelectedCategory={setSelectedCategory} cartCount={cartCount} />
          <Routes>
            <Route path="/" element={ <Home apiData={backendData.product} selectedCategory={selectedCategory} setAddedToCart={setAddedToCart} /> } />
            <Route path="/cart" element={ <Cart cartItems={addedToCart} setAddedToCart={setAddedToCart} /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/admin" element={ <Admin /> } />
          </Routes>
        </>

      )}
    </div>
  );
}