import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ApiProps, OrderProps } from './types/mainTypes';
import Cart from './components/public_views/Cart'
import Layout from './components/public_views/Layout'
import Home from './components/public_views/Home'
import Login from './components/admin_views/Login'
import Admin from './components/admin_views/Admin'

import GetProduct from './api/get/GetProduct'
import GetCategory from './api/get/GetCategory'
import GetXVPic from './api/get/GetXVPic';
import GetNumber from './api/get/GetNumber'
import GetQRCode from './api/get/GetQRCode';

export default function App() {

  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [addedToCart, setAddedToCart] = useState<OrderProps[]>([])

  const [backendData, setBackendData] = useState<ApiProps>({
    product: [],
    category: [],
    qrcode: "",
    xvmart: "",
    number: {PhoneNumber: "", ID: ""}
  })

  useEffect(() => {
    GetCategory(setBackendData)
    GetProduct(setBackendData)
    GetXVPic(setBackendData)
    GetNumber(setBackendData)
    GetQRCode(setBackendData)
  }, [])

  useEffect(() => {
    setAddedToCart(backendData.product.map((item) => (
        { Name: item.Name, Price: item.Price, Quantity: 0, MaxQuantity: item.Quantity, Description: item.Description, ImageURL: item.ImageURL }
    )))
    // eslint-disable-next-line 
  }, [backendData])

  const cartCount = addedToCart.reduce((accumulator, item) => accumulator + (item.Quantity > 0 ? 1 : 0), 0)
  console.log(backendData)
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Layout categories={backendData.category} setSelectedCategory={setSelectedCategory} cartCount={cartCount} />}>
            <Route index element={<Home apiData={backendData.product} selectedCategory={selectedCategory} setAddedToCart={setAddedToCart} xvmartpic={backendData.xvmart} />} />
            <Route path="/cart" element={<Cart cartItems={addedToCart} setAddedToCart={setAddedToCart} qrcode={backendData.qrcode} phoneNumber={backendData.number} />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin apiData={backendData} />} />
        </Routes>
      </Router>
    </div>
  );
}