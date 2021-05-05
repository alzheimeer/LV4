var { Schema, model } = require('mongoose');

var RequestSchema = Schema({
    idUser: {
        ref: "User",
        type: Schema.Types.ObjectId,
        required: true
    },
    fechaConsignacion: {
        type: Date,
        required: false
    },
    valorDeConsignacion: {
        type: Number,
        required: false
    },
    valorCuotaBase: {
        type: Number,
        required: false
    },
    valorCuotaTotal: {
        type: Number,
        required: false
    },
    fechasFacturacion: {
        type: [Date],
        required: false
    },
    estadosFacturacion: {
        type: [String],
        required: false
    },
    idProduct: {
        ref: "Product",
        type: Schema.Types.ObjectId,
        required: true
    },
    numdoc: {
        type: String,
        required: false
    },
    tarjetavPath: {
        type: String,
        required: false
    },
    matriculaPath: {
        type: String,
        required: false
    },
    extractoPath: {
        type: String,
        required: false
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
    resultado: {
        type: String,
        required: false,
    },
    calificacion: {
        type: Number,
        required: false,
    },
    estate: {
        type: String,
        required: true,
    },
    regInmueble: {
        type: Boolean,
        required: false,
        default: false
    },
    regInmuebleOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regPersonales: {
        type: Boolean,
        required: false,
        default: false
    },
    regPersonalesOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regVehiculo: {
        type: Boolean,
        required: false,
        default: false
    },
    regVehiculoOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regTrabajo: {
        type: Boolean,
        required: false,
        default: false
    },
    regTrabajoOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regReferencias: {
        type: Boolean,
        required: false,
        default: false
    },
    regReferenciasOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regReferenciasCom: {
        type: Boolean,
        required: false,
        default: false
    },
    regReferenciasComOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regCedula: {
        type: Boolean,
        required: false,
        default: false
    },
    regCedulaOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regPasaporte: {
        type: Boolean,
        required: false,
        default: false
    },
    regPasaporteOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regTarjetav: {
        type: Boolean,
        required: false,
        default: false
    },
    regTarjetavOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regMatricula: {
        type: Boolean,
        required: false,
        default: false
    },
    regMatriculaOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regExtracto: {
        type: Boolean,
        required: false,
        default: false
    },
    regExtractoOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regOk: {
        type: Boolean,
        required: false,
        default: false
    },
    inmueble: {
        tipo: {
            type: String,
            required: false,

        },
        matricula: {
            type: String,
            required: false,

        },
        uso: {
            type: String,
            required: false,

        },
        estrato: {
            type: Number,
            required: false,

        },
        departamento: {
            type: String,
            required: false,

        },
        ciudad: {
            type: String,
            required: false,

        },
        barrio: {
            type: String,
            required: false,

        },
        direccion: {
            type: String,
            required: false,

        },
        antiguedad: {
            type: Number,
            required: false,

        },
        area: {
            type: Number,
            required: false,

        },
        valorComercial: {
            type: Number,
            required: false,

        },
    },
    vehiculo: {
        tipo: {
            type: String,
            required: false,

        },
        placa: {
            type: String,
            required: false,

        },
        modelo: {
            type: Number,
            required: false,

        },
        tipoCaja: {
            type: String,
            required: false,

        },
        linea: {
            type: String,
            required: false,

        },
        marca: {
            type: String,
            required: false,

        },
        kilometraje: {
            type: Number,
            required: false,

        },
        tipoPlaca: {
            type: String,
            required: false,
        },
        unicoDueno: {
            type: String,
            required: false,
        },
    },
    trabajoEmpleado: {
        tiempoTrabajando: {
            type: Number,
            required: false,
        },
        ingresoMensual: {
            type: Number,
            required: false,
        },
        direccion: {
            type: String,
            required: false,
        },
        telefono: {
            type: Number,
            required: false,
        },
        jefeInmediato: {
            type: String,
            required: false,
        },
        cargoActual: {
            type: String,
            required: false,
        },
    },
    trabajoIndependiente: {
        tiempoTrabajando: {
            type: Number,
            required: false,
        },
        ingresoMensual: {
            type: Number,
            required: false,
        },
        direccion: {
            type: String,
            required: false,
        },
        telefono: {
            type: Number,
            required: false,
        },
        actividadComercial: {
            type: String,
            required: false,
        },
    },
    trabajoEmpresa: {
        nombre: {
            type: String,
            required: false,
        },
        nit: {
            type: String,
            required: false,
        },
        ingresoMensual: {
            type: Number,
            required: false,
        },
        direccion: {
            type: String,
            required: false,
        },
        telefono: {
            type: Number,
            required: false,
        },
        actividadComercial: {
            type: String,
            required: false,
        },
    },

    refFamiliar1: {
        nombre: {
            type: String,
            required: false,
        },
        parentezco: {
            type: String,
            required: false,
        },
        direccion: {
            type: String,
            required: false,
        },
        celular: {
            type: Number,
            required: false,
        }
    },
    refFamiliar2: {
        nombre: {
            type: String,
            required: false,
        },
        parentezco: {
            type: String,
            required: false,
        },
        direccion: {
            type: String,
            required: false,
        },
        celular: {
            type: Number,
            required: false,
        }
    },
    refFamiliar3: {
        nombre: {
            type: String,
            required: false,
        },
        parentezco: {
            type: String,
            required: false,
        },
        direccion: {
            type: String,
            required: false,
        },
        celular: {
            type: Number,
            required: false,
        }
    },
    refComercial1: {
        nombre: {
            type: String,
            required: false,
        },
        empresa: {
            type: String,
            required: false,
        },
        direccion: {
            type: String,
            required: false,
        },
        celular: {
            type: Number,
            required: false,
        }
    },
    refComercial2: {
        nombre: {
            type: String,
            required: false,
        },
        empresa: {
            type: String,
            required: false,
        },
        direccion: {
            type: String,
            required: false,
        },
        celular: {
            type: Number,
            required: false,
        }
    },
    refComercial3: {
        nombre: {
            type: String,
            required: false,
        },
        empresa: {
            type: String,
            required: false,
        },
        direccion: {
            type: String,
            required: false,
        },
        celular: {
            type: Number,
            required: false,
        }
    }
}, {
    timestamps: true,
    versionkey: false
});

module.exports = model('Request', RequestSchema);