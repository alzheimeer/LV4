const Product = require('../models/Product');

const createProduct = async (req, res) => {
  try {
  const newproduct = new Product(req.body);
  const productSave = await newproduct.save();
  res.status(201).json(productSave);    
  } catch (error) {
    return res.status(500).json({ msg: 'Por favor hable con el administrador' });
  }
}
const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    return res.status(201).json(products);
  } catch (error) {
    return res.status(500).json({ msg: 'Por favor hable con el administrador' });
  }
}
const getProductById = async(req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ msg: 'Id Del Producto No Existe' });
  }
}
const updateProductById = async(req, res) => {
  try {
    const udProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {new: true});
    return res.status(200).json(udProduct);
  } catch (error) {
    return res.status(500).json({ msg: 'Id Del Producto No Existe' });
  }
}
const deleteProductById = async(req, res) => {
  const { productId } = req.params;
  try {
    await Product.findByIdAndDelete(productId);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ msg: 'Id Del Producto No Existe' });
  }
}

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById
}
