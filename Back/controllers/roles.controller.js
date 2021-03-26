const Role = require('../models/Role');

const createRole = async(req, res) => {
    try {
        const newrole = new Role(req.body);
        const roleSave = await newrole.save();
        res.status(201).json(roleSave);
    } catch (error) {
        return res.status(500).json({ msg: 'Por favor hable con el administrador' });
    }
}
const getRoles = async(req, res) => {

    try {
        const roles = await Role.find();
        return res.status(201).json(roles);
    } catch (error) {
        return res.status(500).json({ msg: 'Por favor hable con el administrador' });
    }
}
const getRoleById = async(req, res) => {
    try {
        console.log('prueba', req.params);
        const role = await Role.findById(req.params.rolesId);

        return res.status(200).json(role);
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del Role No Existe' });
    }
}
const updateRoleById = async(req, res) => {
    try {
        const udRole = await Role.findByIdAndUpdate(req.params.rolesId, req.body, { new: true });
        return res.status(200).json(udRole);
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del Roleo No Existe' });
    }
}
const deleteRoleById = async(req, res) => {
    const { rolesId } = req.params;
    try {
        await Role.findByIdAndDelete(rolesId);
        return res.status(204).json();
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del Role No Existe' });
    }
}

module.exports = {
    createRole,
    getRoles,
    getRoleById,
    updateRoleById,
    deleteRoleById
}