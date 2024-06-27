const mongoose = require('mongoose');

const DataInsightSchema = new mongoose.Schema({
  end_year: String,
  topic: String,
  sector: String,
  region: String,
  pestle: String,
  source: String,
  swot: String,
  country: String,
  city: String,
  start_year: String,
  intensity: Number,
  likelihood: Number,
  relevance: Number,
  impact: Number,
});

module.exports = mongoose.model('DataInsight', DataInsightSchema);
