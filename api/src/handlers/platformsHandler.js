const getAllPlatforms = require("../controllers/platformsController");

const getPlatformsHandler = async (req, res) => {
    const {name} = req.query;
    try {
        const allPlatforms = await getAllPlatforms(name)
        res.status(200).json(allPlatforms)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = getPlatformsHandler;