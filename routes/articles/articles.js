const express = require('express');

const router = express.Router();
const connection = require('../../config');

// get all
router.get('/', (req, res) => {
  connection.query('SELECT * FROM article', (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

// get id
router.get('/:id', (req, res) => {
  const idParams = req.params.id;

  connection.query(
    'SELECT * FROM article WHERE id = ?',
    idParams,
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    },
  );
});

// post
router.post('/', (req, res) => {
  const data = req.body;

  connection.query('INSERT INTO article SET ?', data, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(results);
    }
  });
});

// put

router.put('/:id', (req, res) => {
  const idParams = req.params.id;
  const data = req.body;

  connection.query(
    'UPDATE article SET ? WHERE id = ?',
    [data, idParams],
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    },
  );
});

// delete
router.delete('/:id', (req, res) => {
  const idParams = req.params.id;

  connection.query(
    'DELETE FROM article WHERE id = ?',
    idParams,
    (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).json(results);
      }
    },
  );
});

module.exports = router;
