const { Router } = require("express");
const { getFilmsByFilter } = require("../controllers/films.controllers.js");

const filmsRoutes = Router();

filmsRoutes.get("/items", getFilmsByFilter);

module.exports = { filmsRoutes };
