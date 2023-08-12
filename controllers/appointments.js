const Appointments = require("../models/appointments");

exports.getAppointments = async (req, res, next) => {
  const appointments = await Appointments.findAll();
  res.send(JSON.stringify(appointments));
};

exports.postAppointments = async (req, res, next) => {
  const { fullName, email, number } = req.body;
  await Appointments.create({
    fullname: fullName,
    email: email,
    phone: number,
  });
  res.send(
    JSON.stringify([
      { result: "Appointment added successfully, please go back" },
    ])
  );
};

exports.deleteAppointments = async (req, res, next) => {
  const { id: idNo } = req.params;

  await Appointments.destroy({
    where: {
      id: idNo,
    },
  });

  res.send(JSON.stringify([{ resutlt: "Item deleted successfully" }]));
};
