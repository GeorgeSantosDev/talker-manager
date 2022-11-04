const fs = require('fs').promises;
const { join } = require('path');

const path = '../talker.json';

const readFile = async () => {
  try {
    const response = await fs.readFile(join(__dirname, path));
    return JSON.parse(response);
  } catch (error) {
    console.log(error);
    return [];
  }
};

const writeFile = async (file) => {
  await fs.writeFile(join(__dirname, path), JSON.stringify(file));
};

module.exports = {
  readFile,
  writeFile,
};