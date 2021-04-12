var { Schema, model } = require("mongoose");

var UserSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    solicitud: {
        type: Schema.Types.ObjectId,
        required: false,
    },
    // In roles we make an array to indicate that it can have many roles and we are going to save only the id of the role
    // and it is referenced to the Role model and we tell it that it is of this type so that it receives the ID
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId,
    }, ],
    password: {
        type: String,
        required: true,
    },
    avatarPath: {
        type: String,
        required: false
    },
    personal: {
        tipodoc: {
            type: String,
            required: false,
            default: "",
        },
        numdoc: {
            type: Number,
            required: false,
        },
        pais: {
            type: String,
            required: false,
            default: "",
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
        celular1: {
            type: Number,
            required: false,
        },
        celular2: {
            type: Number,
            required: false,
        },
    },
    banca: {
        banco: {
            type: String,
            required: false,
            default: "",
        },
        tipocuenta: {
            type: String,
            required: false,
        },
        numcuenta: {
            type: Number,
            required: false,
        },
    },
}, {
    timestamps: true,
    versionKey: false,
}, );

module.exports = model('User', UserSchema);