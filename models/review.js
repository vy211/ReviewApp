const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    registrationExperience: { type: Number, required: true },
    eventExperience: { type: Number, required: true },
    breakfastExperience: { type: Number, required: true },
    // Add other review properties as needed
});

module.exports = mongoose.model('Review', reviewSchema);
