const Role = require('../models/Role');
const User = require('../models/User');
const Product = require('../models/Product');
const bcrypt = require('bcryptjs');

const createRoles = async function() {
    try {
        const count = await Role.estimatedDocumentCount();

        if (count > 0) return;

        await Promise.all([
            new Role({ name: 'user' }).save(),
            new Role({ name: 'moderator' }).save(),
            new Role({ name: 'admin' }).save(),
        ]);
        console.log('Roles creados');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de crear Roles');
    }
};

const createAdmin = async function() {
    try {
        const count = await User.estimatedDocumentCount();

        if (count > 0) return;
        // Create user with model
        const newUser = new User({
            name: 'Administrador',
            surname: 'Administrador',
            email: 'admin@admin.com',
        });
        // hashear the password and assign it to the password of the new user
        const salt = bcrypt.genSaltSync(10);
        newUser.password = bcrypt.hashSync('adminadmin', salt);
        // We check if they sent roles and if so, we check if it exists
        const roles = ['admin', 'user', 'moderator']
        const foundRoles = await Role.find({ name: { $in: roles } })
        newUser.roles = foundRoles.map(role => role._id)
            // Save user in Database
        await newUser.save();
        console.log('Admin creado');
    } catch (error) {
        console.log(error);
        throw new Error('Error Creando Administrador');
    }
};

const createProducts = async function() {
    try {
        const count = await Product.estimatedDocumentCount();

        if (count > 0) return;

        await Promise.all([
            new Product({
                name: "Prestamo Personal",
                valuemin: "50000",
                valuemax: "500000",
                imin: "1.5",
                imax: "1.8",
                termmin: "1",
                termmax: "36",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9V13zPbPG139Jryws7WCEsbSNF2C58qfYXg&usqp=CAU",
                regInmueble: false,
                regPersonales: true,
                regVehiculo: false,
                regTrabajo: true,
                regReferencias: true,
                regReferenciasCom: true,
                regCedula: true,
                regPasaporte: true,
                regTarjetav: false,
                regMatricula: false,
                regExtracto: true,

            }).save(),
            new Product({
                name: "Prestamo Sobre Hipoteca",
                valuemin: "2000000",
                valuemax: "50000000",
                imin: "1.5",
                imax: "1.8",
                termmin: "1",
                termmax: "36",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9V13zPbPG139Jryws7WCEsbSNF2C58qfYXg&usqp=CAU",
                regInmueble: true,
                regPersonales: true,
                regVehiculo: false,
                regTrabajo: false,
                regReferencias: false,
                regReferenciasCom: false,
                regCedula: true,
                regPasaporte: true,
                regTarjetav: false,
                regMatricula: true,
                regExtracto: false,

            }).save(),
            new Product({
                name: "Prestamo Sobre Vehiculo",
                valuemin: "500000",
                valuemax: "50000000",
                imin: "1.5",
                imax: "1.8",
                termmin: "1",
                termmax: "36",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9V13zPbPG139Jryws7WCEsbSNF2C58qfYXg&usqp=CAU",
                regInmueble: false,
                regPersonales: true,
                regVehiculo: true,
                regTrabajo: false,
                regReferencias: false,
                regReferenciasCom: false,
                regCedula: true,
                regPasaporte: true,
                regTarjetav: false,
                regMatricula: true,
                regExtracto: false,

            }).save(),
            new Product({
                name: "Prestamo Para Construcción",
                valuemin: "1000000",
                valuemax: "50000000",
                imin: "1.5",
                imax: "1.8",
                termmin: "1",
                termmax: "36",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9V13zPbPG139Jryws7WCEsbSNF2C58qfYXg&usqp=CAU",
                regInmueble: true,
                regPersonales: true,
                regVehiculo: false,
                regTrabajo: false,
                regReferencias: false,
                regReferenciasCom: false,
                regCedula: true,
                regPasaporte: true,
                regTarjetav: false,
                regMatricula: true,
                regExtracto: true,

            }).save()
        ]);
        console.log('Creados 4 Productos Base');
    } catch (error) {
        console.log(error);
        throw new Error('Error Creando Administrador');
    }
};
module.exports = {
    createRoles,
    createAdmin,
    createProducts
}