const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const {validatorGetItem} = require("../validators/storage");

const {
  createItem,
  getItems,
  getItem,
  deleteItem,
} = require("../controllers/storage");

/**
 * Obtener lsita de items
 */
router.get("/", getItems);
/**
 * Detalle de item
 */
router.get("/:id", validatorGetItem, getItem);
/**
 * Crear item
 */
router.post("/", uploadMiddleware.single("myfile"), createItem);
/**
 * Eliminar item
 */
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
