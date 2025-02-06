import { Document } from "mongoose";

export interface ProductDocument extends Document {
  name: string;
  price: number;
  description?: string;
  category: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}
