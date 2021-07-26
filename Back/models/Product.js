var { Schema, model } = require('mongoose');

var ProductSchema = Schema({
    activo: {
        type: Boolean,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    valuemin: {
        type: Number,
        required: true
    },
    valuemax: {
        type: Number,
        required: true,
    },
    iEfectivoAnual: {
        type: Number,
        required: false,
    },
    iEfectivoAnualMax: {
        type: Number,
        required: false,
    },
    iMoraEfectivoAnual: {
        type: Number,
        required: false,
    },
    imin: {
        type: Number,
        required: true,
    },
    imax: {
        type: Number,
        required: true,
    },
    termmin: {
        type: Number,
        required: true,
    },
    termmax: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false
    },
    regInmueble: {
        type: Boolean,
        required: false,
        default: false
    },
    regPersonales: {
        type: Boolean,
        required: false,
        default: false
    },
    regVehiculo: {
        type: Boolean,
        required: false,
        default: false
    },
    regTrabajo: {
        type: Boolean,
        required: false,
        default: false
    },
    regReferencias: {
        type: Boolean,
        required: false,
        default: false
    },
    regReferenciasCom: {
        type: Boolean,
        required: false,
        default: false
    },
    regCedula: {
        type: Boolean,
        required: false,
        default: false
    },
    regPasaporte: {
        type: Boolean,
        required: false,
        default: false
    },
    regTarjetav: {
        type: Boolean,
        required: false,
        default: false
    },
    regMatricula: {
        type: Boolean,
        required: false,
        default: false
    },
    regExtracto: {
        type: Boolean,
        required: false,
        default: false
    },
    regCamaraCom: {
        type: Boolean,
        required: false,
        default: false
    },
    regRut: {
        type: Boolean,
        required: false,
        default: false
    },
    regEstudioObra: {
        type: Boolean,
        required: false,
        default: false
    },
    regProgramaObra: {
        type: Boolean,
        required: false,
        default: false
    },
    regCuraduria: {
        type: Boolean,
        required: false,
        default: false
    },
    regLicenciaConst: {
        type: Boolean,
        required: false,
        default: false
    },
    administracion: {
        type: Number,
        required: false,
    },
    iva: {
        type: Number,
        required: false,
    },
    aval: {
        type: Number,
        required: false,
    },
    desAval: {
        type: Number,
        required: false,
    },
    desPlataforma: {
        type: Number,
        required: false,
    },
    parqueadero: {
        type: Number,
        required: false,
    },
    peritaje: {
        type: Number,
        required: false,
    },
    registroSimit: {
        type: Number,
        required: false,
    },
    gmfCuatroxMil: {
        type: Number,
        required: false,
    },
    auditorObra: {
        type: Number,
        required: false,
    },
    comisionAdminHipo: {
        type: Number,
        required: false,
    },
    excedenteComisionAdminHipo: {
        type: Number,
        required: false,
    },
    registroHipoteca: {
        type: Number,
        required: false,
    },
    interesesAnticipados: {
        type: Number,
        required: false,
    },
    step: {
        type: Number,
        required: false,
    },

}, {
    timestamps: true,
    versionkey: false
});

module.exports = model('Product', ProductSchema);