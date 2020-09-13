const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    message: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);