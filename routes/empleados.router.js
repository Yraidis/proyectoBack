const express = require("express");
const router = express.Router();

//controlador del empleado
const empleadosController = require ("../controllers/empleados.controller");
router.post("/", empleadosController.create)
module.exports = router