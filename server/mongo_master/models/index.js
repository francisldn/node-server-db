'use strict';

const MongoClient = require('mongodb').MongoClient;
const conf = {
  clientPath: __dirname + '/../../../client/REMOVE',
  dbUrl: 'mongodb://localhost:27017',
  dbName: 'chat',
  PORT: 3000
}

const db = {};

db.MongoClient = new MongoClient(conf);

(async function connect () {
  try {
    await db.MongoClient.connect();
    db.conn = db.MongoClient.db(conf);
    console.log(`Connected to the database '${conf.dbName}'`);
  } catch (err) {
    console.log(err);
  }
})();

module.exports = db;