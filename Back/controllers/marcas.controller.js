const Marca = require('../models/Marcas');

const createMarca = async (req, res) => {
    try {
        console.log(req.body)
        const newmarcas = new Marca(req.body);

        const marcaSave = await newmarcas.save();
        res.status(201).json(marcaSave);
    } catch (error) {
        return res.status(500).json({ msg: 'Por favor hable con el administrador' });
    }
}
const getMarcas = async (req, res) => {

    try {
        const marcas = await Marca.find();
        return res.status(201).json(marcas);
    } catch (error) {
        return res.status(500).json({ msg: 'Por favor hable con el administrador' });
    }
}
const getMarcaById = async (req, res) => {
    try {
        const marca = await Marca.findById(req.params.marcaId);

        return res.status(200).json(marca);
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del Marca No Existe' });
    }
}
const updateMarcaById = async (req, res) => {
    try {
        const udMarca = await Marca.findByIdAndUpdate(req.params.marcaId, req.body, { new: true });
        return res.status(200).json(udMarca);
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del Marcao No Existe' });
    }
}
const deleteMarcaById = async (req, res) => {
    const { marcaId } = req.params;
    try {
        await Marca.findByIdAndDelete(marcaId);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del Marca No Existe' });
    }
}

module.exports = {
    createMarca,
    getMarcas,
    getMarcaById,
    updateMarcaById,
    deleteMarcaById
}