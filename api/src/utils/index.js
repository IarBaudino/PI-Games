/* //esta funcion es para limpiar informacion y puedo reutilizarla.
//recibe un array, y con ese array realiza la limpieza de la informacion y solo tener name, email y phone
const cleanArray = (videogames) =>
  videogames.map((videogame) => {
    return {
      id: videogame.id,
      name: videogame.name,
      description: videogame.description,
      image: videogame.background_image,
      genres: videogame.genres.map((genre) => genre.name),
      platforms: videogame.platforms ? videogame.platforms.map((platform) => platform.platform.name) : '',
      released: videogame.released,
      rating: videogame.rating,
    };
  });

  module.exports = cleanArray; */