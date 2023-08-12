const Sequelize = require("sequelize");

const sequelize = new Sequelize("appointments", "root", "munish123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
