const express = require('express');
const { readFile } = require('../utils/fsUtils');

const route = express.Router();

route.get('/talker', async (_req, res) => {
  const response = await readFile();
  res.status(200).json(response);
});

module.exports = route;
