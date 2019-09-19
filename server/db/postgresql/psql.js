const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:Password@localhost:5432/SDC';
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const timerFn = require('timer-node');

const pool = new Pool({
  user: 'postgres',
  database: 'SDC',
  password: 'Password',
  port: 5432,
});

module.exports = getItemsById;

//helper funcs
//randomInt Inclusive
const randomizer = max => {
  return Math.ceil(Math.random() * max);
};

//randomInt Exclusive
const randomizerFloor = max => {
  return Math.floor(Math.random() * max);
};

// //!QUESTIONS
// const csvWriter = createCsvWriter({
//   path: 'server/db/postgresql/postgresDataQuestions.csv',
//   header: [
//     {id: 'id', title: 'id'},
//     {id: 'product_id', title: 'product_id'},
//     {id: 'question', title: 'question'},
//     {id: 'answer', title: 'answer'},
//     {id: 'author_id', title: 'author_id'},
//     {id: 'vote_count', title: 'vote_count'},
//     {id: 'date_created', title: 'date_created'},
//   ],
//   append: true
// });

//!PRODUCTS
const csvWriter = createCsvWriter({
  path: 'server/db/postgresql/postgresDataProducts.csv',
  header: [
    {id: 'id', title: 'id'},
    {id: 'name', title: 'name'},
  ],
});

// //!AUTHORS
// const csvWriter = createCsvWriter({
//   path: 'server/db/postgresql/postgresDataAuthors.csv',
//   header: [
//     {id: 'id', title: 'id'},
//     {id: 'name', title: 'name'},
//   ]
// });

//!WRITE FILE CODE
const writeToCSV = async () => {
  const timer = timerFn('test-timer');
  timer.start();
  const timerGlobal = timerFn('test-timer');
  timerGlobal.start();
  let records = [];
  for(let i = 0; i <= 10000000; i++){
    let record = {
      id: i,
      name: faker.fake('{{commerce.productName}}')
      // product_id: randomizer(10000000),
      // question: faker.fake('{{lorem.sentence}}') + '?',
      // answer: faker.fake('{{lorem.sentence}}'),
      // author_id: randomizer(1000000),
      // vote_count: randomizer(100),
      // date_created: (randomizerFloor(11) + ' ' + randomizer(31) + ' ' + `20${randomizer(19).toString().padStart(2, '0')}`)
    }
    records.push(record);
  }
  await csvWriter.writeRecords(records)
  await timer.stop();
  await console.log(`10 million records written to CSV in ${timer.seconds()}.${timer.milliseconds()} seconds`);
  await pool.end();
 }

 writeToCSV();


