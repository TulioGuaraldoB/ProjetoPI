const animalService = require("../service/animalService");

function getAllAnimals(req, res) {
    let animals = animalService.getAllAnimals();
    animals.then((result) => res.json(result));
}

function getAnimalById(req, res) {
    let parsedId = parseInt(req.params.id);
    let animal = animalService.getAnimalById(parsedId);
    animal.then((result) => res.json(result));
}

module.exports = { getAllAnimals, getAnimalById };