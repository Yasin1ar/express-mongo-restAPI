const express = require("express");
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  updateProducts,
  deleteProducts,
} = require("../controller/product.controller");

const router = express.Router();

// GET
router.get("/", getProducts);
router.get("/:id", getProduct);

// POST
router.post("/", createProduct);

// PUT
router.put("/:id", updateProduct);
router.put("/", updateProducts);

// DELETE
router.delete("/:id", deleteProduct);
router.delete("/", deleteProducts);

module.exports = router;
