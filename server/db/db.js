const mysqldb = require('mysql');
const mdb = mysqldb.createPool({
  host: 'localhost',
  user:'root',
  password: 'fec2',
  database: 'fec2',
  connectionLimit: 5
});

module .exports = mdb;
