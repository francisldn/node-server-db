const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const username = 'postgres';
const password = '123';
const database = 'chatapp';

const config = {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

const sequelize = new Sequelize(database, username, password,config);
db= {};

const files = fs.readdirSync(__dirname);

// for (const file of files) {
//   if (file!== 'db.js') {
//     console.log(path.join(__dirname, file))
const model = require('./message.js')(sequelize, Sequelize.DataTypes);
// console.log(sequelize)
db[model.name] = model;
// }
// }
for (const model in db) {
  if (db[model].associate) db[model].associate(db);
}


// to check this
db.sequelize = sequelize;
db.Sequelize = Sequelize;
// (async () => {
//   try {
//     await db.sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// })()

module.exports = db;