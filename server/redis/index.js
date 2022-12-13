'use strict';

const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');

const conf = require('./config.js');
const db = require('./models');
const router = require('./router.js');

app.use(serve(conf.clientPath));
app.use(bodyParser());
app.use(router.routes());

db.on('connect', () => {
  const port = 3000;
  app.listen(port);
  console.log(`Server listening on port ${port}`); // eslint-disable-line no-console
});

db.on('error', () => {
  console.error('Error connecting to the db'); // eslint-disable-line no-console
});