var { Schema, model } = require('mongoose');

var ProductSchema  = Schema({
    name: {
        type: String,
        required: true
    },
    valuemin: {
        type: Number,
        required: true
    },
    valuemax: {
        type: Number,
        required: true,
    },
    imin: {
        type: Number,
        required: true,
    },
    imax: {
        type: Number,
        required: true,
    },
    termmin: {
        type: Number,
        required: true,
    },
    termmax: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
        required: false
    }
}, {
    timestamps: true,
    versionkey: false
});

module.exports = model('Product', ProductSchema);