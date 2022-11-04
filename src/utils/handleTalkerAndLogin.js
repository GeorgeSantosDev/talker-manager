const { readFile } = require('./fsUtils');

const getById = async (id) => {
  const file = await readFile();

  return file.find((speaker) => speaker.id === Number(id));
};

const rand = () => Math.random().toString(36).slice(3, 11);

const generateToken = () => rand() + rand();

const getByName = async (name) => {
  const file = await readFile();

  return file.filter((talker) => talker.name.toUpperCase().includes(name.toUpperCase()));
};

module.exports = {
  getById,
  generateToken,
  getByName,
};
