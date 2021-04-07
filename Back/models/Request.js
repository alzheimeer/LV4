var { Schema, model } = require('mongoose');

var RequestSchema = Schema({
    idUser: {
        ref: "User",
        type: Schema.Types.ObjectId,
        required: true
    },
    idProduct: {
        ref: "Product",
        type: Schema.Types.ObjectId,
        required: true
    },
    value: {
        type: Number,
        required: true,
    },
    time: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    estate: {
        type: String,
        required: true,
    },
    inmueble: {
        tipo: {
            type: String,
            required: false,
            default: "",
        },
        matricula: {
            type: String,
            required: false,
            default: "",
        },
        uso: {
            type: String,
            required: false,
            default: "",
        },
        estrato: {
            type: Number,
            required: false,
            default: 0,
        },
        departamento: {
            type: String,
            required: false,
            default: "",
        },
        ciudad: {
            type: String,
            required: false,
            default: "",
        },
        barrio: {
            type: String,
            required: false,
            default: "",
        },
        direccion: {
            type: String,
            required: false,
            default: "",
        },
        antiguedad: {
            type: Number,
            required: false,
            default: 0,
        },
        area: {
            type: Number,
            required: false,
            default: 0,
        },
        valorCom: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    vehiculo: {
        tipo: {
            type: String,
            required: false,
            default: "",
        },
        placa: {
            type: String,
            required: false,
            default: "",
        },
        modelo: {
            type: Number,
            required: false,
            default: 0,
        },
        tipoCaja: {
            type: String,
            required: false,
            default: "",
        },
        linea: {
            type: String,
            required: false,
            default: "",
        },
        referencia: {
            type: String,
            required: false,
            default: "",
        },
        kilometroje: {
            type: Number,
            required: false,
            default: 0,
        },
        tipoPlaca: {
            type: String,
            required: false,
            default: "",
        },
        unicoDueno: {
            type: Boolean,
            required: false,
            default: false,
        },
    }

}, {
    timestamps: true,
    versionkey: false
});

module.exports = model('Request', RequestSchema);