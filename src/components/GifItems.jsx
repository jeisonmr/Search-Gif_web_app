
// Funcitional component que renderiza las imagenes consultadas
export const GifItems = ({title, url}) => {
  return (
    <div className="card">
      {/* Imagen que recibe como parametro el src=url y el titulo=title */}
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
