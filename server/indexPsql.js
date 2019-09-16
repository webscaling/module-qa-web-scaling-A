const express = require('express');
const bodyParser = require('body-parser');

const { client } = require('./db/postgresql/psql.js');

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

app.get('/', (req, res) => {
  console.log(res.body);
});

app.listen(3003, () => {
  console.log('PostgreSQL is Listening on port 3003');
});