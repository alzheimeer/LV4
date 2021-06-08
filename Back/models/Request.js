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
    auditorObra: {
        type: Number,
        required: false
    },
    fechasFacturacion: {
        type: [{
            estado: String,
            fecha: Date,
            cuota: Number,
            diasMora: {
                type: Number,
                require: false,
                default: 0
            },
            idRecibo: {
                type: String,
                require: false,
                default: ''
            },
            valor: {
                type: Number,
                require: false,
                default: 0
            }
        }],
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
    CamaraComPath: {
        type: String,
        required: false
    },
    RutPath: {
        type: String,
        required: false
    },
    EstudioObraPath: {
        type: String,
        required: false
    },
    ProgramaObraPath: {
        type: String,
        required: false
    },
    CuraduriaPath: {
        type: String,
        required: false
    },
    LicenciaConstPath: {
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
    regLaboralQuick: {
        type: Boolean,
        required: false,
        default: false
    },
    regLaboralQuickOk: {
        type: Boolean,
        required: false,
        default: false
    },
    estadoPrestamo: {
        type: Boolean,
        required: false,
        default: false
    },
    regReferenciasQuick: {
        type: Boolean,
        required: false,
        default: false
    },
    regReferenciasQuickOk: {
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
    regCamaraCom: {
        type: Boolean,
        required: false,
        default: false
    },
    regCamaraComOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regRut: {
        type: Boolean,
        required: false,
        default: false
    },
    regRutOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regEstudioObra: {
        type: Boolean,
        required: false,
        default: false
    },
    regEstudioObraOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regProgramaObra: {
        type: Boolean,
        required: false,
        default: false
    },
    regProgramaObraOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regCuraduria: {
        type: Boolean,
        required: false,
        default: false
    },
    regCuraduriaOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regLicenciaConst: {
        type: Boolean,
        required: false,
        default: false
    },
    regLicenciaConstOk: {
        type: Boolean,
        required: false,
        default: false
    },
    regOk: {
        type: Boolean,
        required: false,
        default: false
    },
    nombreProducto: {
        type: String,
        required: false
    },
    tasaEfectivaMes: {
        type: Number,
        required: false
    },
    tasaEfectivaAnual: {
        type: Number,
        required: false
    },
    tasaEfectivaAnualMax: {
        type: Number,
        required: false
    },
    tasaMoraEA: {
        type: Number,
        required: false
    },
    interesMora: {
        type: Number,
        required: false,
        default: 0
    },
    diasMora: {
        type: Number,
        required: false,
        default: 0
    },
    saldoVencido: {
        type: Number,
        required: false,
        default: 0
    },
    rcomisionAdminHipo: {
        type: Number,
        required: false
    },
    rregistroHipoteca: {
        type: Number,
        required: false
    },
    rinteresesAnticipados: {
        type: Number,
        required: false
    },
    rparqueadero: {
        type: Number,
        required: false
    },
    rperitaje: {
        type: Number,
        required: false
    },
    rregistroSimit: {
        type: Number,
        required: false
    },
    rgmf: {
        type: Number,
        required: false
    },
    valorConsignar: {
        type: Number,
        required: false
    },
    administracion: {
        type: Number,
        required: false
    },
    iva: {
        type: Number,
        required: false
    },
    soloInteres: {
        type: Number,
        required: false
    },
    aval: {
        type: Number,
        required: false
    },
    totalCredito: {
        type: Number,
        required: false
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
    trabajoQuick: {
        situacionLaboral: {
            type: String,
            required: false,
            default: ''
        },
        actividad: {
            type: String,
            required: false,
            default: ''
        },
        actividadcargo: {
            type: String,
            required: false,
            default: ''
        },
        antiguedaddeempresa: {
            type: String,
            required: false,
            default: ''
        },
        nombreempresa: {
            type: String,
            required: false,
            default: ''
        },
        telefonoempresa: {
            type: Number,
            required: false,
            default: 0
        },
        uso: {
            type: String,
            required: false,
            default: '',
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

    refPersonalQuick: {
        nombre: {
            type: String,
            required: false,
            default: ''
        },
        apellido: {
            type: String,
            required: false,
            default: ''
        },
        ciudad: {
            type: String,
            required: false,
            default: ''
        },
        celular: {
            type: Number,
            required: false,
            default: 0
        }
    },

    refFamiliarQuick: {
        nombre: {
            type: String,
            required: false,
            default: ''
        },
        apellido: {
            type: String,
            required: false,
            default: ''
        },
        ciudad: {
            type: String,
            required: false,
            default: ''
        },
        celular: {
            type: Number,
            required: false,
            default: 0
        }
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