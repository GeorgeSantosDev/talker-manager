const express = require('express');
const { generateToken } = require('../utils/handleTalkerAndLogin');
const { validateEmail, validatePassword } = require('../middlewares/validations');
 
const route = express.Router();

route.post('/login', validateEmail, validatePassword, (req, res) => {
  res.status(200).json({ token: generateToken() });
});

module.exports = route;
