import Regioe from "../models/regiaoModel.js";

export const getAllRegiaos = async (req, res) => {
    try {
        const regioes = await Regioe.findAll();
        res.json(regioes);
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getRegiaoById = async (req, res) => {
    try {
        const regioe = await Regioe.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(regioe[0]);
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const createRegiao = async (req, res) => {
    try {
        await Regioe.create(req.body);
        res.json({
            "message": "Regiao Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
}

export const updateRegiao = async (req, res) => {
    try {
        await Regioe.update(req.body, {
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
        await Regioe.destroy({
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

