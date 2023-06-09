const express = require('express');
const router = express.Router();
const data = require('../data.js');

router.get('/', (req, res) => {
  res.json(data);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const phone = data.find((phone) => phone.id === parseInt(id));
  if (phone) {
    res.json(phone);
  } else {
    res.status(404).json({ error: 'Phone not found' });
  }
});

module.exports = router;
