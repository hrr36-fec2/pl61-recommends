const mdb = require('../db/db.js');

const seed = require('../db/seed.js');

module.exports = res => {
  mdb.query('USE information_schema', err => {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      mdb.query('SELECT * FROM schemata WHERE schema_name = "hrr36_fec2"', (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send();
        } else {
          if (!data.length) {
            seed(err => {
              if (err) {
                console.log(err);
                res.status(500).send();
              } else {
                res.status(200).send('seeded');
              }
            });
          } else {
            res.status(200).send('seeded');
          }
        }
      });
    }
  });
};
