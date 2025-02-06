import express from "express";
import {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/product.controller";

const router = express.Router();

router.get("/:id", getProduct);
router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
