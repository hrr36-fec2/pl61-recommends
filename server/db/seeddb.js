const seed = require('./seed.js');

seed(err => {
  if (err) {
    console.log(err);
  }

  process.exit();
});