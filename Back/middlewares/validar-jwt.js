const { response } = require("express");
const jwt = require('jsonwebtoken');
const Role = require('../models/Role');
const User = require('../models/User');

const validarJWT = (req, res = response, next) => {

    const token = req.header('x-token');

    if (!token){
        return res.status(401).json({
            ok: false,
            msg: 'error en el token'
        });
    }
    try {
        //the jwt.verify returns an object that has the payload and of there we are only interested in the uid and the name
        const {uid, name} = jwt.verify( token, process.env.SECRET_JWT_SEED );
        req.uid = uid;
        req.name = name;
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        });
    }
    next();
}

const isModerator = async (req, res, next) => {
    // now we look for the user by the id, but this is the uid that we assign in the jwt validation
    const user = await User.findById(req.uid)
    const roles = await Role.find({_id: {$in: user.roles}})
    
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "moderator") {
            next()
        return;
        }
    }
    return res.status(403).json({msg: "Requiere Permisos De Moderador"})
}

const isAdmin = async (req, res, next) => {
    // now we look for the user by the id, but this is the uid that we assign in the jwt validation
    const user = await User.findById(req.uid)
    const roles = await Role.find({_id: {$in: user.roles}})
    
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
            next()
        return;
        }
    }

    return res.status(403).json({msg: "Requiere Permisos De Administrador"})
}

const isUser = async (req, res, next) => {
    // now we look for the user by the id, but this is the uid that we assign in the jwt validation
    const user = await User.findById(req.uid)
    const roles = await Role.find({_id: {$in: user.roles}})
    
    for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "user") {
            next()
        return;
        }
    }
    return res.status(403).json({msg: "Requieres Ser Usuario"})
}
module.exports = {
    validarJWT,
    isModerator,
    isAdmin,
    isUser
};