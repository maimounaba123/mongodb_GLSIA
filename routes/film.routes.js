module.exports = app => {
    const films = require("../controllers/film.controller.js");
    let router = require("express").Router();
  
    // Create a new film
    router.post("/", films.create);
  
    // Retrieve all films
    router.get("/", films.findAll);
  
    app.use("/api/films", router);
  };
  