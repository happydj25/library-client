const mysql = require('mysql');
 
let connection = mysql.createConnection({
  host     : 'localhost',
  port : 4000,
  user     : 'root',
  password : 'autoset',
  database : 'happydjdb'
});

module.exports = db;
