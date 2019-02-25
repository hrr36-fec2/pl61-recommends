const fs = require('fs');
const path = require('path');
const mdb = require('./db.js');

fs.readFile(path.join(__dirname, 'featured.json'), 'utf8', (err, data) => {
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
