const express = require("express");

// Controllers
const animalController = require("../controller/animalController");

// Handlers
const router = express.Router();

// Animals
router.get("/animal", animalController.getAllAnimals);
router.get("/animal/:id", animalController.getAnimalById);
router.get("/picture/:id", animalController.getAnimalPictureById);
router.post("/animal", animalController.createAnimal);

module.exports = router;