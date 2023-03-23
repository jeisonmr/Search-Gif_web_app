
// Funcion asyncrona que consulta en base a la categoria asigana una candidad pre definida de gif
export const getGifs = async (category) => {
  // Url de la api en tipo "SEARCH".
  const url = "https://api.giphy.com/v1/gifs/search";
  // Api Key para la consulta.
  const api_key = "IlSLa3sZ5Eb9SKyvh6wBCyKOZPi4eF4W";
  // Cantidad de imagenes solicitadas.
  const limit = "limit=4";

  // Fetch usando Async and Await convirtiendo de promesa a constante los valores y asignandoselo a la constante "heros".
  const heros = await fetch(`${url}?api_key=${api_key}&q=${category}&${limit}`);
  // Desectruturación y conversion de la data asiganada a la constante "heros".
  const { data } = await heros.json();

  // Mapeo y creacion de objeto liteal par asignar los valores obtenidos de la promesa "Id, Titulo y Url"
  const gifs = await data.map((items) => ({
    id: items.id,
    title: items.title,
    url: items.images.downsized_medium.url,
  }));

  // Retorno de la funcion que devuelve el objeto literal asignado a la constante "gifs"
  return await gifs;
};
