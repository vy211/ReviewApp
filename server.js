const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const eventRoutes = require('./routes/eventRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/reviews', reviewRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/event-review', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        // Start server
        app.listen(3000, () => {
            console.log('Server started on port 3000');
        });
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));
