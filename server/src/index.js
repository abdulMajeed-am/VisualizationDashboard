const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/VisualizationDashboardDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define a schema and model for your data
const DataSchema = new mongoose.Schema({}, { strict: false });
const DataModel = mongoose.model('datainsights', DataSchema);

// API endpoint to get data
app.get('/api/data-insights', async (req, res) => {
  try {
    const data = await DataModel.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
