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
        valorComercial: {
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
        kilometraje: {
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
    },
    trabajoEmpleado: {
        tiempoTrabajando: {
            type: Number,
            required: false,
            default: 0,
        },
        ingresoMensual: {
            type: Number,
            required: false,
            default: 0,
        },
        direccion: {
            type: String,
            required: false,
            default: "",
        },
        telefono: {
            type: Number,
            required: false,
            default: 0,
        },
        jefeInmediato: {
            type: String,
            required: false,
            default: "",
        },
        cargoActual: {
            type: String,
            required: false,
            default: "",
        },
    },
    trabajoIndependiente: {
        tiempoTrabajando: {
            type: Number,
            required: false,
            default: 0,
        },
        ingresoMensual: {
            type: Number,
            required: false,
            default: 0,
        },
        direccion: {
            type: String,
            required: false,
            default: "",
        },
        telefono: {
            type: Number,
            required: false,
            default: 0,
        },
        actividadComercial: {
            type: String,
            required: false,
            default: "",
        },
    },
    trabajoEmpresa: {
        nombre: {
            type: String,
            required: false,
            default: '',
        },
        nit: {
            type: String,
            required: false,
            default: '',
        },
        ingresoMensual: {
            type: Number,
            required: false,
            default: 0,
        },
        direccion: {
            type: String,
            required: false,
            default: "",
        },
        telefono: {
            type: Number,
            required: false,
            default: 0,
        },
        actividadComercial: {
            type: String,
            required: false,
            default: "",
        },
    },
    referencias: {
        refFamiliar: {
            ref1: {
                nombre: {
                    type: String,
                    required: false,
                    default: '',
                },
                parentezco: {
                    type: String,
                    required: false,
                    default: '',
                },
                direccion: {
                    type: String,
                    required: false,
                    default: '',
                },
                celular: {
                    type: Number,
                    required: false,
                    default: 0,
                }
            },
            ref2: {
                nombre: {
                    type: String,
                    required: false,
                    default: '',
                },
                parentezco: {
                    type: String,
                    required: false,
                    default: '',
                },
                direccion: {
                    type: String,
                    required: false,
                    default: '',
                },
                celular: {
                    type: Number,
                    required: false,
                    default: 0,
                }
            },
            ref3: {
                nombre: {
                    type: String,
                    required: false,
                    default: '',
                },
                parentezco: {
                    type: String,
                    required: false,
                    default: '',
                },
                direccion: {
                    type: String,
                    required: false,
                    default: '',
                },
                celular: {
                    type: Number,
                    required: false,
                    default: 0,
                }
            }

        },
        refComercial: {
            ref1: {
                nombre: {
                    type: String,
                    required: false,
                    default: '',
                },
                empresa: {
                    type: String,
                    required: false,
                    default: '',
                },
                direccion: {
                    type: String,
                    required: false,
                    default: '',
                },
                celular: {
                    type: Number,
                    required: false,
                    default: 0,
                }
            },
            ref2: {
                nombre: {
                    type: String,
                    required: false,
                    default: '',
                },
                empresa: {
                    type: String,
                    required: false,
                    default: '',
                },
                direccion: {
                    type: String,
                    required: false,
                    default: '',
                },
                celular: {
                    type: Number,
                    required: false,
                    default: 0,
                }
            },
            ref3: {
                nombre: {
                    type: String,
                    required: false,
                    default: '',
                },
                empresa: {
                    type: String,
                    required: false,
                    default: '',
                },
                direccion: {
                    type: String,
                    required: false,
                    default: '',
                },
                celular: {
                    type: Number,
                    required: false,
                    default: 0,
                }
            }

        },

    },
}, {
    timestamps: true,
    versionkey: false
});

module.exports = model('Request', RequestSchema);