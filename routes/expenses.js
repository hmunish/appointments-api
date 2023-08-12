const express = require("express");
const expensesController = require("../controllers/expenses");

const router = express.Router();

router.get("/", expensesController.getExpenses);

router.post("/", expensesController.postExpenses);

router.delete("/:id", expensesController.deleteExpenses);

module.exports = router;
