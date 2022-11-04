const { readFile } = require('./fsUtils');

const getById = async (id) => {
  const file = await readFile();

  return file.find((speaker) => speaker.id === Number(id));
};

module.exports = {
  getById,
};
