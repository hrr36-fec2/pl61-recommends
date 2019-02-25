const express = require('express');
const path = require('path');
const url = require('url');
const cors = require('cors');
const fs = require('fs');
const mdb = require('./db/db.js');

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/recommends', (req, res) => {
  if (req.method === 'POST') {
    mdb.query('USE information_schema', err => {
      if (err) { console.log(err); }
    });

    mdb.query('SELECT * FROM schemata WHERE schema_name = "hrr36_fec2"', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        if (!data.length) {
          mdb.query('CREATE DATABASE IF NOT EXISTS hrr36_fec2', err => {
            if (err) { console.log(err); }
            mdb.query('USE hrr36_fec2', err => {
              if (err) { console.log(err); }
              mdb.query('DROP TABLE IF EXISTS tracks', err => {
                if (err) { console.log(err); }
                mdb.query('CREATE TABLE tracks (_id INTEGER NOT NULL AUTO_INCREMENT, track_id VARCHAR(255) NOT NULL UNIQUE, title VARCHAR(255) NOT NULL, artist VARCHAR(255), album VARCHAR(255), PRIMARY KEY (_id))', err => {
                  if (err) { console.log(err); }
                  fs.readFile(path.join(__dirname, './db/featured.json'), 'utf8', (err, data) => {
                    if (err) {
                      console.log(err);
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

                      mdb.query('INSERT INTO tracks (track_id, title, artist, album) VALUES ?', [tracks], err => {
                        if (err) {
                          console.log(err);
                        } else {
                          res.status(200).send('seeded');
                          process.exit();
                          return;
                        }
                      });
                    }
                  });
                });
              });
            });
          });
        } else {
          res.status(200).send('seeded');
        }
      }
    });
  } else if (req.method === 'GET') {
    mdb.query('USE information_schema', err => {
      if (err) { console.log(err); }

      const limit = Number(url.parse(req.url).pathname.split('/')[1]);

      mdb.query('USE hrr36_fec2', err => {
        if (err) { console.log(err); }
        mdb.query('SELECT * FROM tracks ORDER BY RAND() LIMIT ?', [limit], (err, data) => {
          if (err) { console.log(err); }
          res.status(200).send(data);
        });
      });
    });
  } else {
    res.status(404).send();
  }
});

app.listen(port, () => {
  console.log('SERVER STARTED');
});
