var { Schema, model } = require("mongoose");

var UserSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    secondname: {
        type: String,
        required: false,
    },
    surname: {
        type: String,
        required: true,
    },
    secondsurname: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    typeloan: {
        type: String,
        required: false,
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
    cedulaPath: {
        type: String,
        required: false
    },
    pasaportePath: {
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
        fechaNac: {
            type: Date,
            required: false,
            default: "",
        },
        fechaExp: {
            type: Date,
            required: false,
            default: "",
        },        
        pais: {
            type: String,
            required: false,
            default: "",
        },
        genero: {
            type: String,
            required: false,
        },
        estadocivil: {
            type: String,
            required: false,
        },
        personasacargo: {
            type: Number,
            required: false,
        },
        numhijos: {
            type: Number,
            required: false,
        },
        niveldeestudios: {
            type: String,
            required: false,
        },
        estadodeestudios: {
            type: String,
            required: false,
        },
        tipovivienda: {
            type: String,
            required: false,
        },
        tiempoenvivienda: {
            type: Number,
            required: false,
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
        ingresos: {
            type: Number,
            required: false,
        },
        egresos: {
            type: Number,
            required: false,
        }
    },
}, {
    timestamps: true,
    versionKey: false,
}, );

module.exports = model('User', UserSchema);