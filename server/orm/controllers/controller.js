const db = require('../models/db');
// const message = require('../models/message');

async function getMessage (ctx) {
  try {
    // console.log(await db.Message);
    ctx.response.body = await db.Message.findAll({attributes:['message_id','content','authorid','timestamp']});
    // ctx.response.body = await db.Message.findAll()
    ctx.response.status = 200;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
}

function postMessage (ctx) {
  const data = ctx.request.body;
  try {
    let authorid = data.authorId === true ? 1 : 0;
    db.Message.create({authorId: authorid, content: data.content});
    ctx.status = 201;
  } catch (err) {
    console.log(err);
    ctx.status = 500;
  }
  
  ctx.response.status= 201;    
}

module.exports = {getMessage, postMessage};