import express from "express";

import { 
  getAllTamanhos,
  createTamanho,
    getTamanhoById,
    updateTamanho,
    deleteTamanho
 } from "../controllers/tamanho.js";

const tamanho = express.Router();

tamanho.get('/', getAllTamanhos);
tamanho.get('/:id', getTamanhoById);
tamanho.post('/', createTamanho);
tamanho.patch('/:id', updateTamanho);
tamanho.delete('/:id', deleteTamanho);

export default tamanho;