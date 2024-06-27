const express = require('express');
const router = express.Router();
const DataInsight = require('../models/DataInsight');

// GET all data insights
router.get('/', async (req, res) => {
  try {
    const dataInsights = await DataInsight.find();
    res.json(dataInsights);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
