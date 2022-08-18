const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  authorid: {
    type: Number,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now()
  }
});

const Message = mongoose.model('Message', messageSchema)

const findMessage = async () => {
  try {
    const data = await Message.find();
    return data;
  } catch (err) {
    console.log(err);
  }
};

const saveMessage = async (msg) => {
  let dt = new Date(Date.now());
  try {
    mongoose.connect(process.env.URL, {useNewUrlParser: true});
    const result = await Message.create({content: msg.content, authorid: msg.authorid, timestamp: dt});
    return result;
  } catch (err) {
    console.log(err);
  }
};


module.exports = {findMessage, saveMessage};