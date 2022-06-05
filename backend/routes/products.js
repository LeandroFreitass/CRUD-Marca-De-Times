import express from "express";

import { 
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
    // getAllMarcas
 } from "../controllers/products.js";

const product = express.Router();


product.get('/', getAllProducts);
// product.get('/marcas2', getAllMarcas);
product.get('/:id', getProductById);
product.post('/', createProduct);
product.patch('/:id', updateProduct);
product.delete('/:id', deleteProduct);

export default product;