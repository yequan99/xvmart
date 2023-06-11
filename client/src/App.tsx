import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom"
import { apiProps } from './types/mainTypes';
import Home from './components/Home'
import Cart from './components/Cart'

export default function App() {

  const [backendData, setBackendData] = useState<apiProps | null>()

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
        <Routes>
          <Route path="/" element={ <Home backendData={backendData} /> } />
          <Route path="/cart" element={ <Cart backendData={backendData} /> } />
        </Routes>
      )}
    </div>
  );
}