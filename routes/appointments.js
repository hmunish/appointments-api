const express = require("express");
const appointments = require("../controllers/appointments");
const router = express.Router();

router.get("/", appointments.getAppointments);

router.post("/", appointments.postAppointments);

router.delete("/:id", appointments.deleteAppointments);

module.exports = router;
