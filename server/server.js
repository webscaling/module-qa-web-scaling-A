const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const mongoose = require('mongoose');

app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//endpoints; http reqs
app.get('/yarpo', (req, res) => {
  console.log('GET req to root/yarpo');
  res.end('yarpo');
});






//Port
const port = 7777;
app.listen(port, () => console.log(`QA proxy serving up the customer query sauce at port: ${port}`));