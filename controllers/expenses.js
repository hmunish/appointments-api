const Expenses = require("../models/expenses");

exports.getExpenses = async (req, res, next) => {
  const expenses = await Expenses.findAll();
  res.send(expenses);
};

exports.postExpenses = async (req, res, next) => {
  const { expName: name, expAmt: amount, expCat: category } = req.body;
  await Expenses.create({
    name,
    category,
    amount,
  });
  res.send([{ result: "Expense has been stored" }]);
};

exports.deleteExpenses = async (req, res, next) => {
  const { id: idNo } = req.params;
  await Expenses.destroy({
    where: {
      id: idNo,
    },
  });
  res.send([{ result: "Success" }]);
};
