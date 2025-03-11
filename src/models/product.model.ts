
/**
 * Product Model Definition
 * 
 * This module defines the Mongoose schema and model for products in the e-commerce system.
 * It provides the data structure for storing product information in MongoDB, including
 * product details such as name, price, description, category, and inventory levels.
 * 
 * The model includes:
 * - Type definitions through TypeScript interface
 * - Schema validation rules for each field
 * - Optimized database indexes for common query patterns
 * - Automatic timestamp tracking for document creation and updates
 * 
 * @module models/product
 */

import mongoose, { Schema, Model, Document } from "mongoose";

/**
 * Interface representing a Product document in MongoDB
 * @extends Document
 */
interface Product extends Document {
  name: string;
  price: number;
  description?: string;
  category: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Schema definition for the Product model
 */
const ProductSchema = new Schema<Product>(
  {
    name: { 
      type: String, 
      required: true,
      trim: true 
    },
    price: { 
      type: Number, 
      required: true,
      min: 0 
    },
    description: { 
      type: String,
      trim: true 
    },
    category: { 
      type: String, 
      required: true,
      trim: true 
    },
    stock: { 
      type: Number, 
      required: true, 
      default: 0,
      min: 0 
    },
  },
  { 
    timestamps: true,
    versionKey: false 
  }
);

// Index frequently queried fields
ProductSchema.index({ category: 1 });
ProductSchema.index({ name: 1 });

const PRODUCT: Model<Product> = mongoose.model<Product>("Product", ProductSchema);

export default PRODUCT;
