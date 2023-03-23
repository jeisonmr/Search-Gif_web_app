import PropTypes from "prop-types";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItems } from "./GifItems";

export const GifGrid = ({ category }) => {
  // Custom Hooks que recibe las imagenes y el estado de la carga;
  const { images, loading } = useFetchGifs(category);
  
  return (
    <>
    {/* Nombre de la categoria consultada */}
      <h3>{category}</h3>
      {/* Grilla / Lista de gif o stickers consultados*/}
      <div className="card-grid">
        {/* Operador ternario que valida el estado de carga de la imagenes renderizandolas solo cuando ya estan todas listas de lo contrario muestra un mensaje "Cargando..." */}
        {
        loading 
        ? ( <h3>Cargando...</h3>) 
        : (// Renderiza las imagenes consultadas
            images.map((items) => {
            return <GifItems key={items.id} {...items} />;
              })
          )}
      </div>
    </>
  );
};

// Asignación de PropTypes de las valores que son recibidos y su obligatoria asignación.
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
