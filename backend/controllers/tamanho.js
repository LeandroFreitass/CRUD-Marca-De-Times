import Tamanho from "../models/tamanhoModel.js";

export const getAllTamanhos = async (req, res) => {
    try {
        const tamanhos = await Tamanho.findAll();
        res.json(tamanhos);
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getTamanhoById = async (req, res) => {
    try {
        const tamanho = await Tamanho.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(tamanho[0]);
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const createTamanho = async (req, res) => {
    try {
        await Tamanho.create(req.body);
        res.json({
            "message": "Tamanho Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
}

export const updateTamanho = async (req, res) => {
    try {
        await Tamanho.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Tamanho Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
}

export const deleteTamanho = async (req, res) => {
    try {
        await Tamanho.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Tamanho Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
}

