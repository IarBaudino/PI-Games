const mapGames = (games) => {
    return games.map((game) => {
        let genres;
        
        if (typeof game.id === 'string') {
            // Si el juego proviene de la base de datos
            // Mapea los géneros desde el modelo Genres
            genres = game.Genres.map((genre) => genre.name);
        } else {
            // Si el juego proviene de la API
            // Mapea los géneros directamente desde game.genres
            genres = game.genres?.map((genre) => genre.name) || [];
        }

        return {
            id: game.id,
            name: game.name,
            description: game.description,
            image: game.background_image,
            genres: genres,
            platforms: game.platforms,
            released: game.released,
            rating: game.rating,
            isFromDb: typeof game.id === 'string'
        }
    })
}

module.exports = mapGames;

