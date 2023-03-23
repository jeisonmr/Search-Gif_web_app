import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

function App() {
  // Estado del array de categorias solicitadas
  const [cateregories, setCateregories] = useState([]);

  // Función que valida si la nueva categoria no esta registrada en la lista.
  const onAddCategory = (data) => {
    if (!cateregories.find((i) => i === data)) {
      setCateregories([data, ...cateregories]);
    }
  };

  return (
    <>
      {/* Titulo principal de la aplicacion */}
      <h1>Gif Expert App</h1>

      {/* Input para agregar categorias */}
      <AddCategory onNewData={onAddCategory} />
      
      {/* Grilla lista de categorias */}
      {cateregories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}

export default App;
