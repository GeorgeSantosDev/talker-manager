const express = require('express');
const { generateToken } = require('../utils/handleTalkerAndLogin');

const route = express.Router();

route.post('/login', (req, res) => {
  res.status(200).json({ token: generateToken() });
});

module.exports = route;
