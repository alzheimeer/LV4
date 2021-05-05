var { Schema, model } = require('mongoose');

var BillSchema = Schema({
    idUser: {
        type: String,
        required: true
    },
    idProducto: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true,
    },
    plazo: {
        type: Number,
        required: true,
    },
    numcuota: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
    versionkey: false
});

module.exports = model('Bill', BillSchema);