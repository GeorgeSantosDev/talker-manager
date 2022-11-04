const fs = require('fs').promises;
const { join } = require('path');

const path = '../talker.json';

const readFile = async () => {
  try {
    const response = await fs.readFile(join(__dirname, path));
    console.log(JSON.parse(response));
    return JSON.parse(response);
  } catch (error) {
    console.log(error);
    return [];
  }
};

module.exports = {
  readFile,
};