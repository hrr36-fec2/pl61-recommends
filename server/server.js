const express = require('express');
const path = require('path');
const mdb = require('./db/db.js');

const app = express();
const port = process.env.PORT || 3003;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/recommends', (req, res) => {
  mdb.query('SELECT * FROM tracks ORDER BY RAND() LIMIT 10', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    }
    else { res.status(200).send(data); }
  });
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
