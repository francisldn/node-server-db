const Koa = require('koa');
const app = new Koa();
const path = require('path');
const serve = require('koa-static');
const router = require('./router');
const bodyParser = require('koa-bodyparser');
const morgan = require('koa-morgan');
const cors = require('@koa/cors');
const db = require('./models/db');

const clientPath= path.join(__dirname, '../../client');
const PORT = 3000;

app.use(bodyParser());
app.use(serve(clientPath));
app.use(router.routes());
app.use(router.allowedMethods())
app.use(morgan('dev'));
app.use(cors());


(async () =>{
  await db.sequelize.sync();
  const port = 3000;
  app.listen(port);
  console.log(`Server listening on port ${port}`); // eslint-disable-line no-console
})();
// app.listen(PORT, async () => {
//   console.log(`Listening at PORT:${PORT}`);
//   await db.sequelize.sync();
//   try {
//     await db.sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// });