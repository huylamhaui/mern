const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        unique: true
    },
    description: {
        type: String,
        maxlength: 300
    }
})

export const Role = mongoose.model('Role', roleSchema);