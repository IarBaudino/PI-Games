const { getAllGames, getGameById, createGameDb} = require("../controllers/gamesController")


const getGamesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const allGames = await getAllGames(name)
        res.status(200).json(allGames)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const getDetailGamelHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api" //realiza un filtrado por base de datos y api
    try {
        const response = await getGameById(id, source)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const createGameHandler = async (req, res) => {
    const {name, description, image, genres, platforms, released, rating} = req.body;

    try{
        const response = await createGameDb (name, description, image, genres, platforms, released, rating)
        res.status(200).json(response)
    }catch (error){
        res.status(400).json({ error: error.message })
    }
}


module.exports = {
    getGamesHandler,
    getDetailGamelHandler,
    createGameHandler

}