import express from "express";

import { 
    getAllTamanho,
    createTamanho,
    getTamanhoById,
    updateTamanho,
    deleteTamanho
 } from "../controllers/tamanho.js";

const marca = express.Router();

marca.get('/', getAllTamanho);
marca.get('/:id', getTamanhoById);
marca.post('/', createTamanho);
marca.put('/:id', updateTamanho);
marca.delete('/:id', deleteTamanho);

export default marca;