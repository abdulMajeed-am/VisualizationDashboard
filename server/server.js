const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dataInsightsRouter = require('./routes/dataInsights');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/VisualizationDashboardDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use routes
app.use('/api/data-insights', dataInsightsRouter);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
