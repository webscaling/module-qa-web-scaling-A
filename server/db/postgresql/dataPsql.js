const faker = require('faker');
const fs = require('fs');

//helper funcs
//randomInt Inclusive
const randomizer = max => {
  return Math.ceil(Math.random() * max);
};

//randomInt Exclusive
const randomizerFloor = max => {
  return Math.floor(Math.random() * max);
};

const stream = fs.createWriteStream('seedPsql.csv', {flags: 'a'});



stream.end();