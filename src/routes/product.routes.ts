/**
 * Product Routes
 *
 * This module defines the API routes for product resource operations.
 * It maps HTTP endpoints to their corresponding controller functions.
 *
 * Routes:
 * - GET /products/:id - Retrieve a specific product by ID
 * - GET /products/ - Retrieve all products
 * - POST /products/ - Create a new product
 * - PUT /products/:id - Update an existing product
 * - DELETE /products/:id - Delete a product
 *
 * @module routes/product
 */
import express from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller";

const router = express.Router();

router.get("/:id", getProduct);
router.get("/", getAllProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
