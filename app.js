const express = require("express");
const bodyParser = require("body-parser");
const errorController = require("./controllers/error"); // controller function to handle invalid requests
const appointmentsRoutes = require("./routes/appointments");
const expensesRoutes = require("./routes/expenses");
const sequelize = require("./util/database");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/appointments", appointmentsRoutes);

app.use("/expenses", expensesRoutes);

app.use(errorController.get404);

sequelize.sync().then((res) => {
  app.listen(3000);
});
