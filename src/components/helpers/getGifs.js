export const getGifs = async (category) => {
  const url = "https://api.giphy.com/v1/gifs/search";
  const api_key = "IlSLa3sZ5Eb9SKyvh6wBCyKOZPi4eF4W";
  const heros = await fetch(`${url}?api_key=${api_key}&q=${category}&limit=40`);
  const { data } = await heros.json();

  const gifs = await data.map((items) => ({
    id: items.id,
    title: items.title,
    url: items.images.downsized_medium.url,
  }));
//   console.log(gifs)
  return await gifs;
};
