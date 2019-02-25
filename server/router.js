const get = require('./controllers/get.js');
const post = require('./controllers/post.js');
const del = require('./controllers/delete.js');

module.exports = (req, res) => {
  if (req.method === 'POST') {
    post(res);
  } else if (req.method === 'GET') {
    get(req, res);
  } else if (req.method === 'DELETE') {
    del(res);
  } else {
    res.status(404).send();
  }
};
