import { useEffect, useState } from 'react';
import { ApiProps } from '../types/mainTypes';

export default function FetchData() {
    const [backendData, setBackendData] = useState<ApiProps | null>()

    useEffect(() => {
      fetch("/product").then(
        response => response.json()
      ).then(
        data => {
          setBackendData(data)
        }
      )
    }, [])

    return backendData
}