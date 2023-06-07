const Animal = require("../model/animal");

function getAllAnimals() {
    let animals = Animal.findAll();
    return animals;
}

module.exports = { getAllAnimals };