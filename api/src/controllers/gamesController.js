
const axios = require('axios');
const { Op } = require("sequelize");

const { Videogame, Genres } = require('../db.js');

const  mapGames  = require("./auxiliares/auxiliar.js")

require('dotenv').config();
const URL = `https://api.rawg.io/api/games`;
const { API_KEY } = process.env

// TRAER A TODOS LOS GAMES DE LA API Y DE LA BASE DE DATOS.
const getAllGames = async (name) => {
    let gamesDb = [];
    let gamesApi = [];

    

    if (name) {
        gamesDb = await Videogame.findAll({
            include: Genres,
            where: { name: { [Op.iLike]: `%${name}%` } }, 
            limit: 15
        }); // esto limita los resultados a 15
        let nameToLower = name.toLowerCase();
        const response = await axios.get(`${URL}?key=${API_KEY}&search=${nameToLower}&page_size=15`);
        gamesApi = response.data.results;
    } else {
        gamesDb = await Videogame.findAll({ include: Genres });
        
        const response = await axios.get(`${URL}?key=${API_KEY}&page_size=100`);
        gamesApi = response.data.results;
    }
    const allVideoGames = gamesDb.concat(gamesApi)
    const games = mapGames(allVideoGames) // aca utilizo mi funcion aux para mapear los games y solo traer la info que quiero


    if (games.length === 0 && name !== undefined) {
        throw new Error("There is no videogame!!!")
    }
    return games;
}

// TRAER A LOS GAMES POR --ID-- DE LA API Y LA BASE DE DATOS.
const getGameById = async (id, source) => {
    const game =
        source === "api"
            ? (await axios.get(`${URL}/${id}?key=${API_KEY}`)).data
            : await Videogame.findByPk(id, { include: [Genres] })

    const mappedGame = mapGames([game]);// Como mapGames devuelve un arreglo, usamos [0] para obtener el primer elemento
    return mappedGame;
}


const createGameDb = async (name, description, image, genres, platforms, released, rating) => {
    const newGameDb = await Videogame.create({ name, description, image, platforms, released, rating });

    const genre = await Genres.findAll({
        where: {
           name: genres
        }
    })
    // Asociar los géneros encontrados al juego
    await newGameDb.addGenres(genre);

    //garantiza que el objeto newGameDb contenga los géneros asociados al juego después de que se hayan realizado las operaciones de creación y asociación en la base de datos
    await newGameDb.reload({
        include: {
            model: Genres,
            attributes: ["name"],
            through: { attributes: [] }
        }
    })
 

    return newGameDb
}
module.exports = { getAllGames, getGameById, createGameDb };