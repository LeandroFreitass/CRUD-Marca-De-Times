import Marca from "../models/marcaModel.js";

export const getAllMarca = async (req, res) => {
    try {
        const marcas = await Marca.findAll();
        res.json(marcas);
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const getMarcaById = async (req, res) => {
    try {
        const marca = await Marca.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(marca[0]);
    } catch (error) {
        res.json({ message: error.message });
    }

}

export const createMarca = async (req, res) => {
    try {
        await Marca.create(req.body);
        res.json({
            "message": "Marca Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
}

export const updateMarca = async (req, res) => {
    try {
        await Marca.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Marca Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
}

export const deleteMarca = async (req, res) => {
    try {
        await Marca.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Marca Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    }
    
}

