// require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
// const getItemsById = require('./db/postgresql/psql.js');

const pool = new Pool({
  user: 'postgres',
  database: 'SDC',
  password: 'Password',
  port: 5432,
});

const app = express();

app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/itemPSQL', (req, res) => {
  const product = req.query.productId;
  pool.query(`SELECT products.id, products.name, questions.question, questions.answer, authors.username, questions.vote_count, questions.date_created FROM products, questions, authors WHERE (products.id = ${product} AND questions.product_id = products.id AND questions.author_id = authors.id);`, (err, results) => {
    res.send(results.rows);
    res.end();
  });
});

app.listen(3003, () => {
  console.log('PostgreSQL is Listening on port 3003');
});