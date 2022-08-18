const client = require('./db');

const findMessage = async () => {
  try {
    // establish connection
    await client.connect();
    const collection = client.db('chatapp').collection('message')
    const data = await collection.find({}).toArray();
    client.close();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const saveMessage = async (msg) => {
  let dt = Date.now();
  try {
    await client.connect();
    // console.log(msg)
    const collection = client.db('chatapp').collection('message');
    const result = await collection.insertOne({content: msg.content, authorid: msg.authorId, timestamp: dt});
    client.close();
    return result;

  } catch (err) {
    console.log(err);
  }
};


module.exports = {findMessage, saveMessage};