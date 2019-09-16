const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { qaDB, Product, findItem } = require('./db/mongo/mongodb.js');

app.use(express.static('dist'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


//db Connection log
qaDB.on('error', console.error.bind(console, 'connection error:'));
qaDB.once('open', function() {
  console.log('MongoDB Connected!');
});

//endpoints; http reqs
app.get('/yarpo', (req, res) => {
  // console.log('GET req to root/yarpo');
  res.end('yarpo');
});

//params object with id prop passed from second argument of React axios req is accessed by req.query."id"
app.get('/item', (req, res) => {
  findItem(req.query.id)
    .then(item => {
      // console.log(`Successful GET req to /item for item: ${item}`);
      res.status(200).send(item[0]);
    })
    .catch(err => {
      // console.log('error after GET req to /item for findItem query');
      res.status(500).send('Resources not found in QA database');
    });
});
//db post req Insert query
app.post('/item', (req, res) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    ProductId: req.body.ProductId,
    ItemName: req.body.ItemName,
    QA: req.body.QA
  });
  product.save()
    .then(result => {
      // console.log('POST item req to /item: Promise resolved');
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

//PUT req updateVoteCount
app.put('/updateVote', (req, res) => {
  Product.updateOne({ ProductId: req.body.pID, 'QA._id': req.body.qID },
    {
      '$set': {
        'QA.$.Votes': req.body.votes
      }
    })
    .exec()
    .then(() => {
      res.status(200).end();
    })
    .catch(err => {
      console.error(err);
    });
});




//Port
const port = 3000;
app.listen(port, () => console.log(`QA server connected on port: ${port}`));