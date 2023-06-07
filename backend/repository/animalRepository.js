const Animal = require("../model/animal");

async function getAllAnimals() {
    let animals = await Animal.findAll();
    return animals;
}

async function getAnimalById(animalId) {
    var animal = await Animal.findByPk(animalId);
    return animal;
}

async function createAnimal(animal) {
    await Animal.create({
        name: animal.name,
        breed: animal.breed,
        gender: animal.gender,
        age: animal.age,
        size: animal.size,
        city: animal.city,
        state: animal.state,
        dewormed: animal.dewormed,
        castrated: animal.castrated,
        vaccinated: animal.vaccinated,
        special_care: animal.special_care,
        picture: animal.picture,
    });
}

module.exports = { getAllAnimals, getAnimalById, createAnimal };