const Animal = require("../model/animal");

async function seedAnimals() {
    let animals = await Animal.findAll();
    if (animals.length <= 0) {
        await Animal.create({
            name: "Tobias",
            breed: "Siberiano",
            gender: "Macho",
            age: 1,
            size: "Grande",
            city: "Franca",
            state: "SP",
            dewormed: "Sim",
            castrated: "Não",
            vaccinated: "Sim",
            special_care: 0,
            picture: "f5051eaa-52ec-4611-9e84-7574b47b82df",
        });
    }
}

module.exports = { seedAnimals };