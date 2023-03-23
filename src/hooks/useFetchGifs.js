import { useEffect, useState } from "react";
import { getGifs } from "../components/helpers/getGifs";


export const useFetchGifs = (category) =>{
      // Estado del arreglo de imagenes que recibe de la consulta.
      const [images, setImages] = useState([]);
      // Estado de la carga para mostrar mientras cargan las imagenes.
      const [loading, setLoading] = useState(true)

      // Funcion asyncrona que recibe la promesa de la funcion que consulta y trae el arreglo de imagenes
      const getImages = async () => {
        const imgs = await getGifs(category);
        // Agrega las imagenes al arreglo.
        setImages(imgs);
        // Cambia el estado de la carga.
        setLoading(false)
      };
      
      // Hook de efecto para que solo se utilice una sola vez renderizado el compoenente la funcion de que trae las imagenes de la consulta y las agrega al arreglo "getImages()"
      useEffect(() => {
        setTimeout(() => {
      }, 1000);
      getImages();
      }, []);
    
      // Retorna las imagenes y el estado de la carga.
      return {
            images,
            loading
      }

}