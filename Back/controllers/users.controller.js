const {response} = require('express');
const User = require('../models/User');


// Search all users
const getUsers = async function (req, res) {
    try {
        const usuario = await User.find({}, {"password": 0});
        return res.status(201).json(usuario);
    } catch (error) {
        return res.status(500).json({ msg: 'Por favor hable con el administrador'});}
};

//Search for a specific user
const getUserById = async function (req, res) {
    try {
        const usuario = await User.findById(req.params.userId, {"password": 0});
        return res.status(201).json(usuario);
    } catch (error) {
        return res.status(500).json({ msg: 'Id Del usuario No Existe'});}
};

//Update user simply
const updateUserById = async function (req, res) {
    try {
        const usuario = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true});
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Usuario No Existe'});}
};

//Add - Update missing user data
const completeUserById = async function (req, res) {
    try {
        const usuario = await User.findByIdAndUpdate(req.params.userId, req.body, {new: true});
        return res.status(201).json(usuario);
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Usuario No Existe'});}
};

//Delete a user
const deleteUserById = async function (req, res) {
    try {
        await User.findByIdAndDelete(req.params.userId);
        return res.status(201).json({ msg: 'Usuario Borrado Con Exito'});
    } catch (error) {
        return res.status(500).json({ msg: 'Id De Usuario No Existe'});}
};

module.exports = {
    getUsers,
    getUserById,
    deleteUserById,
    updateUserById,
    completeUserById
}
