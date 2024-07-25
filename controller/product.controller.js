const PRODUCT = require("../models/products.model");

// adding a product API
const createProduct = async (req, res) => {
  try {
    const product = await PRODUCT.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// getting all the products API
const getProducts = async (req, res) => {
  try {
    const products = await PRODUCT.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// getting the desired product with id API
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await PRODUCT.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// updating the desired product with id API
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await PRODUCT.findByIdAndUpdate(id, req.body);
    if (!product) {
      res.status(404).json({ message: "product not found!" });
    } else {
      const updatedProduct = await PRODUCT.findById(id);
      res.status(200).json(updatedProduct);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProducts = async (req, res) => {
  try {
    await PRODUCT.updateMany(req.body);

    res.status(200).json({ message: "products updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete the desired product with id API
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await PRODUCT.findByIdAndDelete(id);
    if (!product) {
      res.status(404).json({ message: "product not deleted!" });
    } else {
      res.status(200).json({ message: "deleted successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProducts = async (req, res) => {
  try {
    const products = await PRODUCT.deleteMany(req.body);
    const checkProducts = await PRODUCT.find(req.body);
    if (checkProducts.length === 0) {
      res.status(200).json({ message: "products deleted successfully" });
    } else {
      res.status(404).json({ message: "product not deleted!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  updateProducts,
  deleteProducts,
};

PRODUCT.updateMany();
