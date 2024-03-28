const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require("./routes/eventRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const authRoutes = require("./routes/authRoutes");
const bodyParser = require("body-parser");

//use supabase for backend its a famour RDBMS
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", userRoutes);
app.use("/api", eventRoutes);
app.use("/api", reviewRoutes);
app.use("/api", authRoutes);



const PORT = process.env.PORT || 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
