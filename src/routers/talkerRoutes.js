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
    const talkers = await readFile();
    const id = talkers[talkers.length - 1].id + 1;
    const newTalker = { id, ...req.body };

    await writeFile([...talkers, newTalker]);

  res.status(201).json(newTalker);
});

route.put('/talker/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateDate,
  validateRate, async (req, res) => {
    const { id } = req.params;
    const talkerUpdate = { id: Number(id), ...req.body };
    const talkers = await readFile();

    const talkersUpdated = talkers.map((talker) => {
      if (talker.id === Number(id)) {
        return talkerUpdate;
      }
      return talker;
    });

    await writeFile(talkersUpdated);

  res.status(200).json(talkerUpdate);
});

route.delete('/talker/:id', validateToken, async (req, res) => {
    const { id } = req.params;

    const talkers = await readFile();

    const talkersUpdated = talkers.filter((talker) => talker.id !== Number(id));
    await writeFile(talkersUpdated);

  res.status(204).json();
});

module.exports = route;
