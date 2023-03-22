import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

function App() {
  const [cateregories, setCateregories] = useState([]);

  const onAddCategory = (data) => {
    if (!cateregories.find((i) => i === data)) {
      setCateregories([data, ...cateregories]);
    }
  };

  return (
    <>
      <h1>Gif Expert App</h1>

      {/* Input para agregar categorias */}
      <AddCategory onNewData={onAddCategory} />
      
      {/* Lista de categorias */}
      {cateregories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}

export default App;
