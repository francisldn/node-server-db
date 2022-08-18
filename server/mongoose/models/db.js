const mongoose = require('mongoose');
require('dotenv').config('../.env');

mongoose.connect(process.env.URL, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to database'));

module.exports = db;