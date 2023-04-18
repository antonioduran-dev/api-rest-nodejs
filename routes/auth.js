const express = require("express");
const router = express.Router();
const { registerCtrl, loginCtrl } = require("../controllers/auth");

//Import validators for register and login
const { validatorRegister, validatorLogin } = require("../validators/auth");

/**
 * Crear un registro
 */
// http://localhost:3001/api/auth/register
router.post("/register", validatorRegister, registerCtrl);

/**
 * Logear un registro
 */
// http://localhost:3001/api/auth/login
router.post("/login", validatorLogin, loginCtrl);

//Export router
module.exports = router;
