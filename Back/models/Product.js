var { Schema, model } = require('mongoose');

var ProductSchema = Schema({
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
}, {
    timestamps: true,
    versionkey: false
});

module.exports = model('Product', ProductSchema);