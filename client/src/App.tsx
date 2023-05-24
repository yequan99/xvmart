import React, { useEffect, useState } from 'react';

export type apiType = {
  users: string[]
}

function App() {

  const [backendData, setBackendData] = useState<apiType | null>()

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <div>
      {(typeof backendData?.users === 'undefined') ? (
        <p>Loading ...</p>
      ) : (
        backendData?.users.map((user,index) => (
          <p key={index}>{user}</p>
        ))
      )}
    </div>
  );
}

export default App;
