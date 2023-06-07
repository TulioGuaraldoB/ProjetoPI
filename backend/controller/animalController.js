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

const getAnimalPictureById = (req, res) => {
    let parsedId = parseInt(req.params.id);
    let animalPicture = animalService.getAnimalPictureById(parsedId);
    animalPicture.then((result) => res.json(result));
}

const createAnimal = (req, res) => {
    let animalRequest = {
        name: req.body.name,
        breed: req.body.breed,
        gender: req.body.gender,
        age: req.body.age,
        size: req.body.size,
        city: req.body.city,
        state: req.body.state,
        dewormed: req.body.dewormed,
        castrated: req.body.castrated,
        vaccinated: req.body.vaccinated,
        special_care: req.body.special_care,
        picture: req.body.picture,
    };

    animalService.createAnimal(animalRequest).then((result) => res.json(result));
}

module.exports = { getAllAnimals, getAnimalById, getAnimalPictureById, createAnimal };