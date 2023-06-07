const express = require("express");

// Controllers
const animalController = require("../controller/animalController");

// Handlers
const router = express.Router();

// Animals
router.get("/animal", animalController.getAllAnimals);
router.get("/animal/:id", animalController.getAnimalById);

module.exports = router;