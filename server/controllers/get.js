const mdb = require('../db/db.js');
const url = require('url');

module.exports = (req, res) => {
  const limit = Number(url.parse(req.url).pathname.split('/')[1]);

  mdb.query('USE hrr36_fec2', err => {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      mdb.query('SELECT * FROM tracks ORDER BY RAND() LIMIT ?', [limit], (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send();
        } else {
          res.status(200).send(data);
        }
      });
    }
  });
};
