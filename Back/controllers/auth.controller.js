const User = require('../models/User');
const Role = require('../models/Role');
const bcrypt = require('bcryptjs');
const {generarJWT} = require('../helpers/jwt');

// Create User
const crearUsuario = async function (req, res) {
    const { email, password, roles } = req.body;
    try {
        // verify the email that does not exist
        const existeEmail = await User.findOne({email});
        if (existeEmail) {
            return res.status(400).json({
                ok: false,
                msg: 'Ese email ya esta registrado'
            });
        }
        // Create user with model
        const newUser = new User(req.body);
        // hashear the password and assign it to the password of the new user
        const salt = bcrypt.genSaltSync(10);
        newUser.password = bcrypt.hashSync(password, salt);
        // generate JWT
        const token = await generarJWT(newUser._id, newUser.name);
        // We check if they sent roles and if so, we check if it exists
        if (roles) {
            const foundRoles = await Role.find({name: {$in: roles}})
            newUser.roles = foundRoles.map(role => role._id)
        } else {
            const role = await Role.findOne({name: "user"})
            newUser.roles = [role._id];
        }        
        // Save user in Database
        await newUser.save();
        // Generate successful response
        return res.status(201).json({
            ok: true,
            uid: newUser._id,
            name: newUser.name,
            surname: newUser.surname,
            email: newUser.email,
            roles: newUser.roles,
            token
        });
    } catch (error) {
        return res.status(500).json({ok: false, msg: 'Por favor hable con el administrador'});}
}

// User Login
const loginUsuario = async function (req, res) {
    const {email,password} = req.body;
    try {
        // We check if the email exists and we bring the user to newUser
        const userfound = await User.findOne({email}).populate("roles");
        if (!userfound) {return res.status(400).json({ok: false, msg: 'El correo no existe'});}
        // Confirm if the password does math 
        const validPassword = bcrypt.compareSync(password, userfound.password);
        if (!validPassword) {return res.status(400).json({ok: false, msg: 'El password no es valido'});}
        // Generate the JWT
        const token = await generarJWT(userfound._id, userfound.name);
        // Generate successful response
        return res.status(200).json({
            ok: true,
            uid: userfound._id,
            roles: userfound.roles,
            name: userfound.name,
            surname: userfound.surname,
            email: userfound.email,
            token
        });
    } catch (error) {
        console.log(error);return res.status(500).json({ok: false, msg: 'Hable con el administrador'})}
}

// Revalidate The Token
const revalidarToken = async function (req, res) {
    const {uid} = req;
    // We look if the token exists
    const dbUser = await User.findById(uid);
    if (dbUser) {
        name = dbUser.name;
        surname = dbUser.surname;
        email = dbUser.email;
        roles = dbUser.roles;
    } else {
        name = '';
        email = '';
    }
    // We will generate new JWT
    const token = await generarJWT(uid, name);
    // Generate successful response
    return res.json({
        ok: true,
        uid,
        name,
        surname,
        email,
        roles,
        token
    });
}


module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
}