const axios = require('axios');
require('dotenv').config();
const URL = `https://api.rawg.io/api/platforms`;
const { API_KEY } = process.env;

const getAllPlatforms = async (name) => {
    const platformsApi = await axios.get(`${URL}?key=${API_KEY}`);
    const platforms = platformsApi.data.results;
    if (name) {
        return platforms
            .filter((platform) =>
                platform.name.toLowerCase().includes(name.toLowerCase())
            )
            .map((platform) => ({
                id: platform.id, // Agrega el ID a los resultados
                name: platform.name,
            }));
    }

    return platforms.map((platform) => ({
        id: platform.id, // Agrega el ID a los resultados
        name: platform.name,
    }));
};

module.exports = getAllPlatforms;