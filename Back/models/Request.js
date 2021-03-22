var { Schema, model } = require('mongoose');

var RequestSchema  = Schema({
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
    
}, {
    timestamps: true,
    versionkey: false
});

module.exports = model('Request', RequestSchema);