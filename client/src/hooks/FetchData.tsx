import { useEffect, useState } from 'react';
import { apiProps } from '../types/mainTypes';

export default function FetchData() {
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

    return backendData
}