const Pool = require('pg').Pool;
require('dotenv').config('../.env')

const db = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.HOST || 'localhost',
  port: process.env.DB_PORT || '5432',
})

db.connect();

module.exports = db;