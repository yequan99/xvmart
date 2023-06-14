import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import { apiProps, orderProps } from './types/mainTypes';
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Home from './components/Home'

export default function App() {

  const [backendData, setBackendData] = useState<apiProps | null>()
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [addedToCart, setAddedToCart] = useState<orderProps[]>([])

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
          {/* <div className="mt-24">
            {addedToCart.map((item) => (
                <p>{item.Name} / {item.Price} / {item.Quantity} </p>
            ))}
          </div> */}
          <Routes>
            <Route path="/" element={ <Home apiData={backendData.product} selectedCategory={selectedCategory} setAddedToCart={setAddedToCart} /> } />
            <Route path="/cart" element={ <Cart cartItems={addedToCart} setAddedToCart={setAddedToCart} /> } />
          </Routes>
        </>

      )}
    </div>
  );
}