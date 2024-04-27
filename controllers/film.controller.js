const db = require("../models");
const Film = db.Films;
//Create and Save a new Film
exports.create = function (req, res) {
  // Validate request
  if (!req.body.titre) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Film
  const film = new Film({
    titre: req.body.titre,
    realisateur: req.body.realisateur,
    anneesortie: req.body.anneesortie,
    genre: req.body.genre,
    synopsis: req.body.synopsis,
    duree: req.body.duree,
    language: req.body.language,
    pays: req.body.pays,
    note: req.body.note,
  });
  // Save Film in the database
  film
    .save(film)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Film.",
      });
    });
};
// Retrieve all Films from the database.
exports.findAll = (req, res) => {
  const titre = req.query.titre;
  let condition = titre
    ? { titre: { $regex: new RegExp(titre), $options: "i" } }
    : {};
  Film.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Films.",
      });
    });
};