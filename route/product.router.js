const express = require("express");
const {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  updateProducts,
  // deleteProducts,
} = require("../controller/product.controller");

const router = express.Router();

// GET
router.get("/:id", getProduct); // for getting a desired product
router.get("/", getProducts); // for getting desired products

// POST
router.post("/", createProduct); // for creating a or many products

// PUT
router.put("/:id", updateProduct); // for updating a product
router.put("/", updateProducts); // for updating many products

// DELETE
router.delete("/:id", deleteProduct); // for deleting a product
// router.delete("/", deleteProducts); // for deleting products

module.exports = router;
