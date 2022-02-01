const express = require('express');
const router = express.Router();
const Items = require('./items-model');
const { restricted, invalidCategory } = require('./items-middleware');

router.get('/:id', restricted, invalidCategory, (req, res, next) => {
  const { id } = req.params;
  Items.getProducts(id)
    .then(item => {
      res.json(item);
    })
    .catch(next);
});

module.exports = router;