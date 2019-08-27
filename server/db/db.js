const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

mongoose.connect('mongodb://localhost:27017/firstNewDB', {useNewUrlParser: true});

const qaDB = mongoose.connection;
qaDB.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected yarpin!');
});

// const qaSchema = new Schema({
//   id:
// });

