const mysql = require('mysql2');
require('dotenv').config();

// Creating our connection string function
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Livnoor11',
  database: 'company_db'
});

module.exports = db;