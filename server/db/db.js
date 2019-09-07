const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { conStr } = require('./connection.js');

mongoose.connect(conStr, {useNewUrlParser: true});

const qaDB = mongoose.connection;


const qaSchema = new mongoose.Schema({
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
  Category: String,
  QA: [qaSchema]
}, {collection: 'qa-bank' });

const Product = mongoose.model('qa-bank', productSchema);

const findItem = (id) => {
  return Product.find({ ProductId: id });
};




module.exports = { qaDB, Product, findItem };

