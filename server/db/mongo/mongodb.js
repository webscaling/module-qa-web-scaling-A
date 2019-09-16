const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/SDC', {useNewUrlParser: true});

const qaDB = mongoose.connection;

const qaSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  Qstn: String,
  Ans: String,
  Author: String,
  Votes: Number,
  Date: Date
});

const productSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  ProductId: Number,
  ItemName: String,
  QA: [qaSchema]
}, {collection: 'qa' });

const Product = mongoose.model('qa', productSchema);

const findItem = (id) => {
  return Product.find({ ProductId: id });
};

module.exports = { qaDB, Product, findItem };
