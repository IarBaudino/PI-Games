const { Router } = require('express');
// Importar todos los routers;
const gamesRouter = require ("../routes/gamesRouter");
const genresRouter = require('./genresRouter');
const platformsRouter = require('./plataformsRouter');
// Ejemplo: const authRouter = require('./auth.js');


const mainRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
mainRouter.use("/games", gamesRouter)
mainRouter.use("/genres", genresRouter)
mainRouter.use("/platforms", platformsRouter)


module.exports = mainRouter;
