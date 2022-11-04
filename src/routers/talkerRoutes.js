const express = require('express');
const { readFile } = require('../utils/fsUtils');
const { getById } = require('../utils/handleTalkerAndLogin');

const route = express.Router();

route.get('/talker', async (_req, res) => {
  const response = await readFile();
  res.status(200).json(response);
});

route.get('/talker/:id', async (req, res) => {
  const { id } = req.params;

  const talker = await getById(id);

  if (talker) {
    return res.status(200).json(talker);
  }

  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  });

module.exports = route;
