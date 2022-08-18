const {MongoClient} = require('mongodb');
require('dotenv').config('../.env');

const url = 'mongodb://localhost:27017/chatapp';

const client = new MongoClient(url,{ useNewUrlParser: true, useUnifiedTopology: true });

(async () => {
  await client.connect();
  const db = client.db('chatapp');
  const collection = db.collection('message');
  // const result = await collection.insertOne({
  //   "authorId": 1, 
  //   "content": "hello world"
  // })
  // let returnItem = await collection.find({})
  // let itemArray = await returnItem.toArray();
  // console.log(itemArray);
  // client.close();
})()

module.exports = client;
