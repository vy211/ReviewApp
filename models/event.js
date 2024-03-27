const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // Add other event properties as needed
});

module.exports = mongoose.model('Event', eventSchema);
