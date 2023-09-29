const getAllGenres = require("../controllers/genresController");

const getGenresHandler = async (req, res) => {
    const {genres} = req.query;
    try {
        const allGenres = await getAllGenres(genres)
        res.status(200).json(allGenres)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getGenresHandler;