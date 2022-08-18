const {findMessage, saveMessage} = require('../models/model');


async function getMessage (ctx) {
  try {
    ctx.response.body = await findMessage();
    ctx.response.status = 200;
  } catch (err) {
    console.log(err);
    // further error handling
    ctx.status = 500;
  }
}

async function postMessage (ctx) {
  try {
    const data = ctx.request.body;
    await saveMessage(data);
    ctx.response.status= 201; 
  } catch (err) {
    console.log(err)
    ctx.response.status = 500;
  }
  
}

module.exports = {getMessage, postMessage};