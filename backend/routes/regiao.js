import express from "express";

import { 
  getAllRegiaos,
  createRegiao,
    getRegiaoById,
    updateRegiao,
    deleteRegiao
 } from "../controllers/regiao.js";

const regioe = express.Router();

regioe.get('/', getAllRegiaos);
regioe.get('/:id', getRegiaoById);
regioe.post('/', createRegiao);
regioe.patch('/:id', updateRegiao);
regioe.delete('/:id', deleteRegiao);

export default regioe;