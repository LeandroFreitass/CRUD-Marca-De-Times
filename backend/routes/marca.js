import express from "express";

import { 
    getAllMarca,
    createMarca,
    getMarcaById,
    updateMarca,
    deleteMarca
 } from "../controllers/marca.js";

const marca = express.Router();

marca.get('/', getAllMarca);
marca.get('/:id', getMarcaById);
marca.post('/', createMarca);
marca.put('/:id', updateMarca);
marca.delete('/:id', deleteMarca);

export default marca;