const Sequelize = require("sequelize");
const sequelize = new Sequelize(`Animais`, `root`, `fatec123*`, {
    dialect: 'mysql',
    host: `127.0.0.1`
});

module.exports = sequelize;