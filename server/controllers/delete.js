const mdb = require('../db/db.js');

module.exports = res => {
  mdb.query('DROP DATABASE hrr36_fec2', err => {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.status(200).send();
    }
  });
};