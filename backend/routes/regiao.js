import express from "express";

import { 
  getAllRegiaos,
  createRegiao,
    getRegiaoById,
    updateRegiao,
    deleteRegiao
 } from "../controllers/regiao.js";

const regioa = express.Router();

regioa.get('/', getAllRegiaos);
regioa.get('/:id', getRegiaoById);
regioa.post('/', createRegiao);
regioa.patch('/:id', updateRegiao);
regioa.delete('/:id', deleteRegiao);

export default regioa;