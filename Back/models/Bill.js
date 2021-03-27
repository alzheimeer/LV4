var { Schema, model } = require('mongoose');

var BillSchema = Schema({
    idUser: {
        type: String,
        required: true
    },
    datepay: {
        type: Date,
        required: true
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