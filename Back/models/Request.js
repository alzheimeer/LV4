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
    regReferenciasCom: {
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
    referencias: {
        refFamiliar: {
            ref1: {
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
            ref2: {
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
            ref3: {
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
            }

        },
        refComercial: {
            ref1: {
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
            ref2: {
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
            ref3: {
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

        },

    },
}, {
    timestamps: true,
    versionkey: false
});

module.exports = model('Request', RequestSchema);