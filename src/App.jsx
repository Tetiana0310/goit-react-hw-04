import { useEffect, useState } from 'react';
import { fetchImages } from './api';

export default function App () {
const [images, setImages] = useState([])
  useEffect(() => {
    const fetchData = async () => {
        try {
        const data = await fetchImages();
        setImages(data); 
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    fetchData();
  }, []); 
return (
  <div>App</div>
);
}

 