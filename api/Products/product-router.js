const express = require('express');
const router = express.Router();
const Items = require('./product-model');
const { restricted, invalidCategory } = require('./product-middleware');

router.get('/:id', restricted, invalidCategory, (req, res, next) => {
  const { id } = req.params;
  Items.getProducts(id)
    .then(item => {
      res.json(item);
    })
    .catch(next);
});

router.post('/', async (req, res, next) => {
  try {

    const resp = await Items.addProduct(req.body);
    res.status(201).json(resp);
  }
  catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Items.getProductById(id);
    if (!deletedProduct) {
      res.status(404).json({
        message: 'the product does not exist'
      });
    } else {
      res.json(deletedProduct);
      await Items.remove(id);
    }
  }
  catch {
    res.status(500).json({
      message: 'the product could not be deleted'
    });
  }
});

module.exports = router;

