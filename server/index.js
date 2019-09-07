const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const mongoose = require('mongoose');
const { qaDB, Product, findItem } = require('./db/db.js');

app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//db Connection log
qaDB.on('error', console.error.bind(console, 'connection error:'));
qaDB.once('open', function() {
  console.log('db connected yarpin!');
});

//endpoints; http reqs
app.get('/yarpo', (req, res) => {
  console.log('GET req to root/yarpo');
  res.end('yarpo');
});

//params object with id prop passed from second argument of React axios req is accessed by req.query."id"
app.get('/item', (req, res) => {
  findItem(req.query.id)
    .then(item => {
      console.log(`Successful GET req to /item for item: ${item}`);
      res.status(200).send(item[0]);
    })
    .catch(err => {
      console.log('error after GET req to /item for findItem query');
      res.status(500).send('Resources not found in QA database');
    });
});
//db post req Insert query
app.post('/item', (req, res) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    ProductId: req.body.ProductId,
    ItemName: req.body.ItemName,
    Category: req.body.Category,
    QA: req.body.QA
  });
  product.save()
    .then(result => {
      console.log('POST item req to /item: Promise resolved');
      res.status(201).send({
        message: 'handling POST requests to /item'
        // createdProduct: result
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send({ error: err });
    });
});






//Port
const port = 3000;
app.listen(port, () => console.log(`QA proxy serving up the customer query sauce at port: ${port}`));