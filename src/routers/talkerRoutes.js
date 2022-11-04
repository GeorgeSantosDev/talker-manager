const express = require('express');
const { readFile, writeFile } = require('../utils/fsUtils');
const { getById } = require('../utils/handleTalkerAndLogin');
const { validateToken,
  validateName, 
  validateAge,
  validateTalk,
  validateDate,
  validateRate } = require('../middlewares/validations');

const route = express.Router();

route.get('/talker', async (_req, res) => {
  const talkers = await readFile();
  res.status(200).json(talkers);
});

route.get('/talker/:id', async (req, res) => {
  const { id } = req.params;

  const talker = await getById(id);

  if (talker) {
    return res.status(200).json(talker);
  }

  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

route.post('/talker',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateDate,
  validateRate, async (req, res) => {
    const newTalker = req.body;
    const talkers = await readFile();

    await writeFile([...talkers, newTalker]);

  res.status(201).json(newTalker);
});

// route.put('/talker',
//   validateToken,
//   validateName,
//   validateAge,
//   validateTalk,
//   validateDate,
//   validateRate, async (req, res) => {
//     const talkerUpdate = req.body;
//     const talkers = await readFile();


//     await writeFile([...talkers, newTalker]);

//   res.status(200).json(newTalker);
// });

module.exports = route;
