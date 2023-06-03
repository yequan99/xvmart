import { useEffect, useState } from 'react';
import { apiProps } from '../types/mainTypes';

function App() {

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
        backendData?.product.map((item,index) => (
          <p key={index}>{item.Name}</p>
        ))
      )}
    </div>
  );
}

export default App;
