var { Schema, model } = require("mongoose");

var RoleSchema = Schema(
    {
        name: String,
    },
    {
        versionkey: false,
    }
);

module.exports = model('Role', RoleSchema);    