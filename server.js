const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());


app.use('/users', userRoutes);


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
