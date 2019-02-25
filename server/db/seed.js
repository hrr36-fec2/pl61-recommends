const fs = require('fs');
const path = require('path');
const mdb = require('./db.js');

module.exports = (cb) => {
  mdb.query('CREATE DATABASE IF NOT EXISTS hrr36_fec2', err => {
    if (err) {
      console.log(err);
      cb(err);
    } else {
      mdb.query('USE hrr36_fec2', err => {
        if (err) {
          console.log(err);
          cb(err);
        } else {
          mdb.query('DROP TABLE IF EXISTS tracks', err => {
            if (err) {
              console.log(err);
              cb(err);
            } else {
              mdb.query('CREATE TABLE tracks (_id INTEGER NOT NULL AUTO_INCREMENT, track_id VARCHAR(255) NOT NULL UNIQUE, title VARCHAR(255) NOT NULL, artist VARCHAR(255), album VARCHAR(255), PRIMARY KEY (_id))', err => {
                if (err) {
                  console.log(err);
                  cb(err);
                } else {
                  console.log('Database initialized.');

                  fs.readFile(path.join(__dirname, 'featured.json'), 'utf8', (err, data) => {
                    if (err) {
                      console.log(err);
                      cb(err);
                    } else {
                      let json = JSON.parse(data).aTracks;
                      let tracks = [];

                      for (let track of json) {
                        if (!track.artist_name) {
                          track['artist_name'] = '(unknown artist)';
                        }

                        if (!track.album_title) {
                          track['album_title'] = '(unknown album)';
                        }

                        tracks.push([track.track_id, track.track_title, track.artist_name, track.album_title]);
                      }

                      mdb.query('USE hrr36_fec2', err => {
                        if (err) {
                          console.log(err);
                          cb(err);
                        } else {
                          mdb.query('INSERT INTO tracks (track_id, title, artist, album) VALUES ?', [tracks], err => {
                            if (err) {
                              console.log(err);
                              cb(err);
                            } else {
                              console.log('Database seeded.');
                              cb();
                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};
