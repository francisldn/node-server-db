'use strict';

const mongoose = require('./db');

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  authorid: Number,
  content: String,
  timestamp: {
    type: Number,
    default: Date.now
  }
});

const Message = mongoose.model('Message', messageSchema);


module.exports = Message;