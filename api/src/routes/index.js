const { Router } = require('express');
// Importar todos los routers;
const gamesRouter = require ("../routes/gamesRouter");
const genresRouter = require('./genresRouter');
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
mainRouter.use("/games", gamesRouter)
mainRouter.use("/genres", genresRouter)


module.exports = mainRouter;
