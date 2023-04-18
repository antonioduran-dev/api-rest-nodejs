// import express module
const express = require("express");
const authMiddleware = require("../middleware/session");
const {
  validatorCreateItem,
  validatorGetItem,
} = require("../validators/tracks");
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/tracks");
const checkRol = require("../middleware/rol");
//create router
const router = express.Router();

/**
 * Lista los items
 */
router.get("/", authMiddleware, getItems);
/**
 * Obtener un detalle de item
 */
router.get("/:id", authMiddleware, validatorGetItem, getItem);
/**
 * Crear un registro
 */
router.post(
  "/",
  authMiddleware,
  checkRol(["user","admin"]),
  validatorCreateItem,
  createItem
);
/**
 * Actualizar un registro
 */
router.put(
  "/:id",
  authMiddleware,
  validatorGetItem,
  validatorCreateItem,
  updateItem
);
/**
 * Ekiminar un registro
 */
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);

//Export router
module.exports = router;
