const mysqldb = require('mysql');
const mdb = mysqldb.createPool({
  host: 'localhost',
  user: 'root',
  database: 'fec2',
  connectionLimit: 5
});

module .exports = mdb;
