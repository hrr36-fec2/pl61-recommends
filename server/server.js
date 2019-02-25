const express = require('express');
const path = require('path');
const cors = require('cors');

const router = require('./router.js');

const app = express();
const port = process.env.PORT || 3003;

app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/recommends', router);

app.listen(port, () => {
  console.log('SERVER STARTED');
});
