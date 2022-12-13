'use strict';

const db = require('./');

exports.getAll = () => db.conn.collection('messages').find({}).toArray();

exports.set = msg => db.conn.collection('messages').insert({
  authorId: msg.authorId,
  content: msg.content,
  timestamp: Date.now()
});