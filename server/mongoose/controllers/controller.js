'use strict';

const message = require('../models/model.js');

exports.getAll = async ctx => {
  try {
    ctx.body = await message.find({});
  } catch (e) {
    ctx.status = 500;
    // Further handle your error on the back-end
  }
};

exports.set = async ctx => {
  try {
    await message.create(ctx.request.body);
    ctx.status = 200;
  } catch (e) {
    ctx.status = 500;
    // Further handle your error on the back-end
  }
};

exports.deleteAll = async (ctx) => {
  try {
    await message.deleteMany({});
    ctx.status= 200;
  } catch (e) {
    console.log(e)
    ctx.status = 500;
  }
};