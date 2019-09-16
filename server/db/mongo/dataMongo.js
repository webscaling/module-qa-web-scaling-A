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

const stream = fs.createWriteStream('seedJSON.json', {flags: 'a'});

for (let i = 9000000; i <= 10000000; i++) {
  if (i % 100000 === 0) {
    console.log(i);
  }
  const doc = {};
  doc.ProductId = i;
  doc.ItemName = faker.fake('{{commerce.productName}} by {{company.companyName}}');
  const number = Math.floor(Math.random() * 7) + 1;
  doc.QA = [];
  for (let j = 0; j < number; j++) {
    doc.QA.push({
      Qstn: faker.fake('{{lorem.sentence}}') + '?',
      Ans: faker.fake('{{lorem.sentence}}' + '.'),
      Author: faker.fake('{{internet.userName}}'),
      Votes: randomizer(20),
      Date: new Date(`20${randomizer(19).toString().padStart(2, '0')}`, randomizerFloor(11), randomizer(31))
    });
  }
  const docToJSON = JSON.stringify(doc);
  stream.write(docToJSON + '\n');
}

stream.end();

console.log('10,000,000 unique items created');
