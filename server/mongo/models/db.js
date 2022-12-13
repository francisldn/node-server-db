const {MongoClient} = require('mongodb');
require('dotenv').config('../.env');

const url = 'mongodb://localhost:27017/chatapp';

const client = new MongoClient(url,{ useNewUrlParser: true, useUnifiedTopology: true });

(async () => {
  await client.connect();
  const db = client.db('chatapp');
  const collection = db.collection('message');
})()

// db.MongoClient = new MongoClient(conf.dbUrl);

// (async function connect () {
//   try {
//     await db.MongoClient.connect();
//     db.conn = db.MongoClient.db(conf.dbName);
//     console.log(`Connected to the database '${conf.dbName}'`);
//   } catch (err) {
//     console.log(err);
//   }
// })();

module.exports = client;
