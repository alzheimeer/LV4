const User = require('../models/User');
const Role = require('../models/Role');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt');
const transporter = require('../middlewares/mailer')

// Create User
const crearUsuario = async function(req, res) {
    const { name, surname, email, password, roles } = req.body;
    try {
        // verify the email that does not exist
        const existeEmail = await User.findOne({ email });
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
            const foundRoles = await Role.find({ name: { $in: roles } })
            newUser.roles = foundRoles.map(role => role._id)
        } else {
            const role = await Role.findOne({ name: "user" })
            newUser.roles = [role._id];
        }
        // Save user in Database
        await newUser.save();

        // send mail with defined transport object
        verificationLink = `https://www.lendiup.com/api/auth/forget/${token}`;

        await transporter.sendMail({
            from: '"Bienvenido A Lendiup" <administrador@lendiup.com', // sender address
            to: newUser.email, // list of receivers
            subject: "Email De Verificacion", // Subject line
            // text: "Hello world?", // plain text body

            /* html: `<b>Bienvenido A Lendiup</b>
            <a href="${verificationLink}">${verificationLink} </a>`, */

            html: `<b>Bienvenido A Lendiup</b>
            <h3> Nombre:</h3>
            <p >${name} </p>
            <h3> Email:</h3>
            <p >${email} </p>
            <p>Solo Escoge El Valor De Tu Prestamo, Completa Los Requisitos Y Te Consignaremos A Tu Cuenta Bancaria En Poco Tiempo</p>`
        });




        // Generate successful response
        return res.status(201).json({
            ok: true,
            uid: newUser._id,
            name: newUser.name,
            surname: newUser.surname,
            email: newUser.email,
            roles: newUser.roles,
            solicitud: newUser.solicitud,
            token
        });
    } catch (error) {
        return res.status(500).json({ ok: false, msg: 'Por favor hable con el administrador' });
    }
}

// User Login
const loginUsuario = async function(req, res) {
    const { email, password } = req.body;
    try {
        // We check if the email exists and we bring the user to newUser
        const userfound = await User.findOne({ email }).populate("roles");
        if (!userfound) { return res.status(400).json({ ok: false, msg: 'El correo no existe' }); }
        // Confirm if the password does math 
        const validPassword = bcrypt.compareSync(password, userfound.password);
        if (!validPassword) { return res.status(400).json({ ok: false, msg: 'El password no es valido' }); }
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
            solicitud: userfound.solicitud,
            token
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ ok: false, msg: 'Hable con el administrador' })
    }
}

// Revalidate The Token
const revalidarToken = async function(req, res) {
    const { uid } = req;
    // We look if the token exists
    const dbUser = await User.findById(uid);
    if (dbUser) {
        name = dbUser.name;
        surname = dbUser.surname;
        email = dbUser.email;
        roles = dbUser.roles;
        solicitud = dbUser.solicitud;
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
        solicitud,
        token
    });
}

// forget
const forget = async function(req, res) {

    try {
        const token = await User.find(req.params.token);
        if (token)
            console.log('existe')
        else
            console.log('no existe')
    } catch (error) {
        return res.status(500).json({ msg: 'Token No Existe' });
    }

    return res.json({
        ok: true,
      
    });
}




module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken,
    forget
}