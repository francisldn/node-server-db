'use strict';

const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');

const conf = require('./config.js');
const router = require('./router.js');

app.use(serve(conf.clientPath));
app.use(bodyParser());
app.use(router.routes());

app.listen(conf.PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server listening on port ${conf.PORT}`); // eslint-disable-line no-console
});