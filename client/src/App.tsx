import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ApiProps, OrderProps } from './types/mainTypes';
import Cart from './components/public_views/Cart'
import Layout from './components/public_views/Layout'
import Home from './components/public_views/Home'
import Login from './components/admin_views/Login'
import Admin from './components/admin_views/Admin'

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
        <h1>Loading ...</h1>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Layout categories={backendData.category} setSelectedCategory={setSelectedCategory} cartCount={cartCount} />}>
              <Route index element={<Home apiData={backendData.product} selectedCategory={selectedCategory} setAddedToCart={setAddedToCart} />} />
              <Route path="/cart" element={<Cart cartItems={addedToCart} setAddedToCart={setAddedToCart} />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin apiData={backendData} />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}