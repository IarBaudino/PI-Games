const { Router } = require("express");
const {getGamesHandler, getDetailGamelHandler, createGameHandler} = require ("../handlers/gamesHandler")

const gamesRouter = Router();

gamesRouter.get("/", getGamesHandler);
gamesRouter.get("/:id", getDetailGamelHandler);
gamesRouter.post("/", createGameHandler)

module.exports = gamesRouter;