var { Schema, model } = require('mongoose');

var BillSchema = Schema({
    idUser: {
        type: String,
        required: true
    },
    Producto: {
        type: String,
        required: true
    },
    fechaLimitePago: {
        type: Date,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    tipodoc: {
        type: String,
        required: true,
    },
    numdoc: {
        type: Number,
        required: true,
    },
    ciudad: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
    },
    cuotaActual: {
        type: Number,
        required: true,
    },
    totalCuotas: {
        type: Number,
        required: true,
    },
    cuotasPendientes: {
        type: Number,
        required: true,
    },
    cuotasEnMora: {
        type: Number,
        required: true,
    },
    interesMora: {
        type: Number,
        required: true,
    },
    diasMora: {
        type: Number,
        required: true,
    },
    saldoVencido: {
        type: Number,
        required: true,
    },
    administracion: {
        type: Number,
        required: true,
    },
    iva: {
        type: Number,
        required: true,
    },
    valorCuotaBase: {
        type: Number,
        required: true,
    },
    valorCuotaTotal: {
        type: Number,
        required: true,
    },
    totalaPagar: {
        type: Number,
        required: true,
    },
    fechaDePago: {
        type: Date,
        required: false,
    },
    valorPagado: {
        type: Number,
        required: false,
    },

}, {
    timestamps: true,
    versionkey: false
});

module.exports = model('Bill', BillSchema);