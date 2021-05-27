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
            secondname: '',
            surname: '-',
            secondsurname: '',
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

const createModerator = async function () {
    try {
        const count = await User.estimatedDocumentCount();

        if (count > 1) return;
        // Create user with model
        const newUser = new User({
            name: 'Moderator',
            secondname: '',
            surname: '-',
            secondsurname: '',
            email: 'moderator@admin.com',
        });
        // hashear the password and assign it to the password of the new user
        const salt = bcrypt.genSaltSync(10);
        newUser.password = bcrypt.hashSync('adminadmin', salt);
        // We check if they sent roles and if so, we check if it exists
        const roles = ['user', 'moderator']
        const foundRoles = await Role.find({ name: { $in: roles } })
        newUser.roles = foundRoles.map(role => role._id)
        // Save user in Database
        await newUser.save();
        console.log('Analista creado');
    } catch (error) {
        console.log(error);
        throw new Error('Error Creando Analista');
    }
};

const createProducts = async function() {
    try {
        const count = await Product.estimatedDocumentCount();

        if (count > 0) return;

        await Promise.all([
            new Product({
                activo: true,
                name: "Prestamo Personal",
                valuemin: "100000",
                valuemax: "2000000",
                imin: "1.5",
                imax: "1.8",
                termmin: "1",
                termmax: "6",
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
                regCamaraCom: false,
                regRut: false,
                regEstudioObra: false,
                regProgramaObra: false,
                regCuraduria: false,
                regLicenciaConst: false,
                iEfectivoAnual: "25",
                iEfectivoAnualMax: "25.83",
                iMoraEfectivoAnual: "23.83",
                administracion: "20000",
                gmfCuatroxMil: "4",
                iva: "19",
                aval: "9.9",
                step: "50000"

            }).save(),
            new Product({
                activo: true,
                name: "Prestamo UltraRapido",
                valuemin: "200000",
                valuemax: "200000",
                imin: "1.5",
                imax: "1.8",
                termmin: "1",
                termmax: "1",
                imageUrl: "",
                regInmueble: false,
                regPersonales: true,
                regVehiculo: false,
                regTrabajo: true,
                regReferencias: true,
                regReferenciasCom: false,
                regCedula: false,
                regPasaporte: false,
                regTarjetav: false,
                regMatricula: false,
                regExtracto: false,
                regCamaraCom: false,
                regRut: false,
                regEstudioObra: false,
                regProgramaObra: false,
                regCuraduria: false,
                regLicenciaConst: false,
                iEfectivoAnual: "25",
                iEfectivoAnualMax: "25.83",
                iMoraEfectivoAnual: "23.83",
                administracion: "20000",
                gmfCuatroxMil: "4",
                iva: "19",
                aval: "9.9",
                step: "200000"

            }).save(),
            new Product({
                activo: true,
                name: "Prestamo Sobre Hipoteca",
                valuemin: "20000000",
                valuemax: "500000000",
                imin: "1.5",
                imax: "1.8",
                termmin: "1",
                termmax: "180",
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
                regCamaraCom: false,
                regRut: false,
                regEstudioObra: false,
                regProgramaObra: false,
                regCuraduria: false,
                regLicenciaConst: false,
                iEfectivoAnual: "16.7652",
                iEfectivoAnualMax: "25.83",
                iMoraEfectivoAnual: "23.83",
                administracion: "114000",
                iva: "19",
                comisionAdminHipo: "2000000",
                excedenteComisionAdminHipo: "40000",
                registroHipoteca: "650000",
                interesesAnticipados: "1.3",
                gmfCuatroxMil: "4",
                step: "1000000"

            }).save(),
            new Product({
                activo: true,
                name: "Prestamo Sobre Vehiculo",
                valuemin: "4000000",
                valuemax: "100000000",
                imin: "1.5",
                imax: "1.8",
                termmin: "1",
                termmax: "24",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9V13zPbPG139Jryws7WCEsbSNF2C58qfYXg&usqp=CAU",
                regInmueble: false,
                regPersonales: true,
                regVehiculo: true,
                regTrabajo: false,
                regReferencias: false,
                regReferenciasCom: false,
                regCedula: true,
                regPasaporte: true,
                regTarjetav: true,
                regMatricula: false,
                regExtracto: false,
                regCamaraCom: false,
                regRut: false,
                regEstudioObra: false,
                regProgramaObra: false,
                regCuraduria: false,
                regLicenciaConst: false,
                iEfectivoAnual: "16.7652",
                iEfectivoAnualMax: "25.83",
                iMoraEfectivoAnual: "23.83",
                administracion: "114000",
                iva: "19",
                parqueadero: "0",
                peritaje: "190000",
                registroSimit: "440000",
                gmfCuatroxMil: "4",
                step: "500000"

            }).save(),
            new Product({
                activo: true,
                name: "Prestamo Para Construcción",
                valuemin: "100000000",
                valuemax: "700000000",
                imin: "1.5",
                imax: "1.8",
                termmin: "1",
                termmax: "180",
                imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9V13zPbPG139Jryws7WCEsbSNF2C58qfYXg&usqp=CAU",
                regInmueble: true,
                regPersonales: true,
                regVehiculo: false,
                regTrabajo: false,
                regReferencias: false,
                regReferenciasCom: false,
                regCedula: true,
                regPasaporte: false,
                regTarjetav: false,
                regMatricula: true,
                regExtracto: true,
                regCamaraCom: true,
                regRut: true,
                regEstudioObra: true,
                regProgramaObra: true,
                regCuraduria: true,
                regLicenciaConst: true,
                iEfectivoAnual: "16.7652",
                iEfectivoAnualMax: "25.83",
                iMoraEfectivoAnual: "23.83",
                administracion: "114000",
                iva: "19",
                comisionAdminHipo: "2000000",
                excedenteComisionAdminHipo: "40000",
                registroHipoteca: "650000",
                interesesAnticipados: "1.3",
                gmfCuatroxMil: "4",
                auditorObra: "7",
                step: "1000000"

            }).save()
        ]);
        console.log('Creados 5 Productos Base');
    } catch (error) {
        console.log(error);
        throw new Error('Error Creando Administrador');
    }
};
module.exports = {
    createRoles,
    createAdmin,
    createModerator,
    createProducts
}