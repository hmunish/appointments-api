const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const Appointments = sequelize.define("lists", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  fullname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.BIGINT(11),
    allowNull: false,
  },
});

module.exports = Appointments;
