const fs = require('fs');
const path = require('path');
const mysqldb = require('mysql');

const mdb = mysqldb.createConnection({
  host: process.env.RDS_HOSTNAME || 'localhost',
  user: process.env.RDS_USERNAME || 'root',
  password: process.env.RDS_PASSWORD || '',
  port: process.env.RDS_PORT || '3306',
  database: 'fec2'
});

fs.readFile(path.join(__dirname, 'featured.json'), 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let json = JSON.parse(data).aTracks;
    let tracks = [];

    for (let track of json) {
      if (!track.artist_name) {
        track.artist_name = '(unknown artist)';
      }

      if (!track.album_title) {
        track.album_title = '(unknown album)';
      }

      tracks.push([track.track_id, track.track_title, track.artist_name, track.album_title]);
    }

    mdb.query('INSERT INTO tracks (track_id, title, artist, album) VALUES ?', [tracks], (err, res) => {
      if (err) {
        console.log(err);
      } else {
        mdb.end();
        process.exit();
      }
    });
  }
});
