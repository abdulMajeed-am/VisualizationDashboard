const express = require('express');
const router = express.Router();
const Data = require('../models/DataModel');

router.get('/data', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});

module.exports = router;
