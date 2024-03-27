const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const bodyParser = require('body-parser');


//use supabase for backend its a famour RDBMS
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/users', userRoutes);


const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
