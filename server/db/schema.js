const mdb = require('./db.js');

mdb.query('CREATE DATABASE IF NOT EXISTS fec2', err => {
  if (err) { console.log(err); }
  mdb.query('USE fec2', err => {
    if (err) { console.log(err); }
    mdb.query('DROP TABLE IF EXISTS tracks', err => {
      if (err) { console.log(err); }
      mdb.query('CREATE TABLE tracks (_id INTEGER NOT NULL AUTO_INCREMENT, track_id VARCHAR(255) NOT NULL UNIQUE, title VARCHAR(255) NOT NULL, artist VARCHAR(255), album VARCHAR(255), PRIMARY KEY (_id))', err => {
        if (err) { console.log(err); }
        mdb.end();
      });
    });
  });
});
