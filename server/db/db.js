const mysqldb = require('mysql');
const mdb = mysqldb.createConnection({
  host: process.env.RDS_HOSTNAME || 'localhost',
  user: process.env.RDS_USERNAME || 'root',
  password: process.env.RDS_PASSWORD || '',
  port: process.env.RDS_PORT || '3306',
  database: 'fec2'
});

module .exports = mdb;
