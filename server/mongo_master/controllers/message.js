'use strict';

const message = require('../models/message.js');

exports.getAll = async ctx => {
  try {
    ctx.body = await message.getAll();
  } catch (e) {
    ctx.status = 500;
    // Further handle your error on the back-end
  }
};

exports.post = async ctx => {
  try {
    await message.set(ctx.request.body);
    ctx.status = 200;
  } catch (e) {
    ctx.status = 500;
    // Further handle your error on the back-end
  }
};