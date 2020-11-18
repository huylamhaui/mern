const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 100
    },
    password: {
        type: String,
        required: true,
        maxlength: 60
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now()
    },
    updatedDate: {
        type: Date
    }
})

module.exports = mongoose.model('Account', accountSchema);
