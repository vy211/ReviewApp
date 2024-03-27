const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    // Add other user properties as needed
});

module.exports = mongoose.model('User', userSchema);
