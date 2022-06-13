const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'hello world' });
});

const articles = require('./articles/articles');
const users = require('./users/users');

router.use('/articles', articles);
router.use('/users', users);

module.exports = router;
