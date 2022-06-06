import Regiao from "../models/regiaoModel.js";

export const getAllRegiaos = async (req, res) => {
    try {
        const regiaos = await Regiao.findAll();
        res.json(regiaos);
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getRegiaoById = async (req, res) => {
    try {
        const regiao = await Regiao.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(regiao[0]);
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const createRegiao = async (req, res) => {
    try {
        await Regiao.create(req.body);
        res.json({
            "message": "Regiao Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
}

export const updateRegiao = async (req, res) => {
    try {
        await Regiao.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Regiao Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
}

export const deleteRegiao = async (req, res) => {
    try {
        await Tamanho.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Regiao Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
}

