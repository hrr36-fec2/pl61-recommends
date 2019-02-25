const mdb = require('./db.js');

mdb.query('CREATE DATABASE IF NOT EXISTS hrr36_fec2', err => {
  if (err) {
    console.log(err);
    mdb.end();
  } else {
    mdb.query('USE hrr36_fec2', err => {
      if (err) {
        console.log(err);
        mdb.end();
      } else {
        mdb.query('DROP TABLE IF EXISTS tracks', err => {
          if (err) {
            console.log(err);
            mdb.end();
          } else {
            mdb.query('CREATE TABLE tracks (_id INTEGER NOT NULL AUTO_INCREMENT, track_id VARCHAR(255) NOT NULL UNIQUE, title VARCHAR(255) NOT NULL, artist VARCHAR(255), album VARCHAR(255), PRIMARY KEY (_id))', err => {
              if (err) {
                console.log(err);
                mdb.end();
              } else {
                console.log('Database initialized.');
                mdb.end();
              }
            });
          }
        });
      }
    });
  }
});
