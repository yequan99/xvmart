import { useEffect, useState } from 'react';
import { apiProps } from './types/mainTypes';
import Container from './components/Container';
import Topbar from './components/Topbar'

export default function App() {

  const [backendData, setBackendData] = useState<apiProps | null>()
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

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
          <Topbar categories={backendData?.category} setSelectedCategory={setSelectedCategory} />
          <Container apiData={backendData?.product} selectedCategory={selectedCategory} />
        </>
      )}
    </div>
  );
}