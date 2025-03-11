/**
 * Product Controller
 *
 * This module contains all the controller functions for product-related operations.
 * It handles the business logic for creating, retrieving, updating, and deleting products
 * in the e-commerce system.
 *
 * Each function handles:
 * - Input validation and sanitization
 * - MongoDB database operations via Mongoose
 * - Error handling with appropriate HTTP status codes
 * - Success responses with JSON formatting
 *
 * Product Schema:
 * - name: String (required) - The product name
 * - price: Number (required) - The product price in currency units
 * - description: String - Detailed product description
 * - category: String (required) - Product category for classification
 * - stock: Number (required) - Available inventory quantity
 * - createdAt: Date - Automatically generated timestamp
 * - updatedAt: Date - Automatically updated on changes
 *
 * @module controllers/product
 * @requires express
 * @requires ../models/product.model
 * @requires mongoose
 */
import { Request, Response } from "express";
import Product from "../models/product.model";
import { isValidObjectId } from "mongoose";

/**
 * Create a new product
 * @param req Express request object
 * @param res Express response object
 */
export const createProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, price, description, category, stock } = req.body;

    // Validate required fields
    if (!name || !price || !category || !stock) {
      res.status(400).json({ message: "Missing Required Product Fields" });
      return;
    }

    // Validate numeric fields
    if (
      typeof price !== "number" ||
      typeof stock !== "number" ||
      price < 0 ||
      stock < 0
    ) {
      res.status(400).json({ message: "Invalid price or stock value" });
      return;
    }

    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

/**
 * Get all products
 * @param req Express request object
 * @param res Express response object
 */
export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

/**
 * Get a single product by ID
 * @param req Express request object
 * @param res Express response object
 */
export const getProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    if (!isValidObjectId(id)) {
      res.status(400).json({ message: "Invalid product ID format" });
      return; // Added missing return statement
    }

    const product = await Product.findById(id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

/**
 * Update a product by ID
 * @param req Express request object
 * @param res Express response object
 */
export const updateProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    // Validate ID format
    if (!isValidObjectId(id)) {
      res.status(400).json({ message: "Invalid product ID format" });
      return;
    }

    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      res.status(404).json({ message: "Product not found!" });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};

/**
 * Delete a product by ID
 * @param req Express request object
 * @param res Express response object
 */
export const deleteProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    // Validate ID format
    if (!isValidObjectId(id)) {
      res.status(400).json({ message: "Invalid product ID format" });
      return;
    }

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({ message: "Product not found!" });
      return;
    }

    res.status(200).json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
};
