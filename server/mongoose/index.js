const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');
const router = require('./router');
const bodyParser = require('koa-bodyparser');
const morgan = require('koa-morgan');
const cors = require('@koa/cors');
const db = require('./models/db')

const clientPath= path.join(__dirname, '../../client');
const PORT = 3000;

app.use(bodyParser());
app.use(serve(clientPath));
app.use(router.routes());
app.use(morgan('dev'));
// app.use(router.allowedMethods())
app.use(cors());

app.listen(PORT, () => {
  console.log(`Listening at PORT:${PORT}`);
});