import express from "express";

import { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
 } from "../controllers/products.js";

const product = express.Router();


product.get('/', getAllProducts);
product.get('/:id', getProductById);
product.post('/', createProduct);
product.patch('/:id', updateProduct);
product.delete('/:id', deleteProduct);

export default product;