const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dataRoutes = require('./routes/api');
const mongoose = require('mongoose')
const DataModel = require('./models/DataModel');

const app = express();

// Connect to database
connectDB();
mongoose.connect("mongodb://localhost:27017/VisualizationDashboardDB");
// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', dataRoutes);

const PORT = process.env.PORT || 5000;

app.get('/getData', (req, res) =>{
    DataModel.find()
    .then(DataInsights => res.json(DataInsights))
    .catch(err => res.json(err))
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
module.exports = app; // Ensure you export the 'app' instance
