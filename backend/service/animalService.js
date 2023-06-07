const animalRepository = require("../repository/animalRepository");

function getAllAnimals() {
    try {
        let animals = animalRepository.getAllAnimals();
        return animals;
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getAllAnimals }