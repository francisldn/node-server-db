const db = require('../db/db');

const findMessage = async () => {
  try {
    const msg = await db.query('SELECT * FROM message');
    return msg;
  } catch (err) {
    return err.message;
  }
   
};

const saveMessage = (msg) => {
  let dt = new Date(Date.now());
  let authorId = msg.authorId === true? 1 : 0;
  try {
    const newMsg = db.query('INSERT INTO message (content, authorId, timeStamp) VALUES ($1, $2, $3) RETURNING *', [msg.content, authorId, dt]);
    return newMsg;
  } catch (err) {
    return err.message;
  }
};


module.exports = {findMessage, saveMessage};