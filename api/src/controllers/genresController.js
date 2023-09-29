const axios = require('axios');

const { Genres } = require('../db.js');

require('dotenv').config();
const URL = `https://api.rawg.io/api/genres`;
const { API_KEY } = process.env


const getAllGenres = async () => {
    const allGenres = await Genres.findAll();
    const genresFromApi = await axios.get(`${URL}/${id}?key=${API_KEY}`);
    const genresApi = genresFromApi.data.results;

    genresApi.forEach(async (genre) => {
        await Genres.findOrCreate({
            where: { name: genre.name }
        });

    });

    return allGenres;
    
};
module.exports = getAllGenres;