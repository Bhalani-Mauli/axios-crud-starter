// routes/movie-characters.routes.js

const router = require("express").Router();

// List all the characters from the API.
router.get("/movie-characters/list", (req, res) => {
  res.send(`Here we'll render the characters list`);
});

// Render a form to create a new character.
router.get("/movie-characters/create", (req, res) => {
  res.send(`Here we'll render the form to create a new characters`);
});

// Submit info to create a new character.
router.post("/movie-characters/create", (req, res) => {
  res.send(`Here we'll send the form to create a new characters`);
});

// Render a form to edit a character.
router.get("/movie-characters/edit/:id", (req, res) => {
  res.send(
    `Here we'll render the form to update character with ID ${req.params.id}`
  );
});

// Submit info to edit a character with a matching id.
router.post("/movie-characters/edit/:id", (req, res) => {
  res.send(
    `Here we'll send the form to update character with ID ${req.params.id}`
  );
});

// Delete a character with a matching id.
router.get("/movie-characters/delete/:id", (req, res) => {
  res.send(`Here we'll delete character with ID ${req.params.id}`);
});

module.exports = router;
