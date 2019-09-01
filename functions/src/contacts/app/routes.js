const express = require('express');
const router = express.Router();

// Temporary mock data:
const contacts = require('./data').users;

router.get('/', (req, res) => {
  const results = contacts;
  res.status(200).json(results);
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  const result = contacts.find((contact) => {
    // Temporarily use whatever data we have:
    // eslint-disable-next-line eqeqeq
    return contact.id == id;
  });
  if (result) {
    res.status(200).json(result);
  } else {
    // Temporarily ignore this:
    res.status(200).json({});
  }
});

module.exports = router;
