const Animal = require("../model/animal");

function getAllAnimals() {
    let animals = Animal.findAll();
    return animals;
}

function getAnimalById(animalId) {
    let animal = Animal.findByPk(animalId);
    return animal;
}

module.exports = { getAllAnimals, getAnimalById };