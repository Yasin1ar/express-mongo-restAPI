const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product's name is required"],
    },
    author: {
      type: String,
      required: [true, "Author's name is required"],
    },
    published_date: {
      type: Date,
      required: false,
    },
    format: {
      type: String,
      enum: ["ebook", "physical"],
      required: true,
      default: "physical",
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    description: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
