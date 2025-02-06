import mongoose, { Schema, Model } from "mongoose";
import { ProductDocument } from "../types/product.types";

const ProductSchema = new Schema<ProductDocument>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String, required: true },
    stock: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const PRODUCT: Model<ProductDocument> = mongoose.model<ProductDocument>("Product", ProductSchema);
export default PRODUCT;
