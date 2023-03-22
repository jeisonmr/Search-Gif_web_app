import { useEffect, useState } from "react";
import { getGifs } from "../components/helpers/getGifs";


export const useFetchGifs = (category) =>{

      const [images, setImages] = useState([]);
      const [loading, setLoading] = useState(true)

      const getImages = async () => {
        const imgs = await getGifs(category);
        setImages(imgs);
        setLoading(false)
      };
      
      useEffect(() => {
        setTimeout(() => {
      }, 1000);
      getImages();
      }, []);
    
      return {
            images,
            loading
      }

}