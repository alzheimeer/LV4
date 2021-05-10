var { Schema, model } = require('mongoose');

var MarcasSchema = Schema(
    {
        code: []
    }
);

module.exports = model('Marcas', MarcasSchema);