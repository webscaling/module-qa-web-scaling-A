const db = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://postgres:Password@localhost:5432/SDC';

const client = new db.Client(connectionString);
client.connect();

module.exports = client;