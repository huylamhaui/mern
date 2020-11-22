const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 50,
        unique: true
    },
    description: {
        type: String,
        maxlength: 200
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('Category', categorySchema);
