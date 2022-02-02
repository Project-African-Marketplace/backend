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

router.post('/', async (req,res,next)=> {
    try{

        const resp = await Items.addProduct(req.body)
        res.status(201).json(resp)
    }
    catch(err){
        next(err)
    }
})

router.put('/:product_id', async (req,res,next) => {
  try{
    const {product_id} = req.params
    const newProduct = await Items.insertProduct(product_id,req.body)
    res.status(200).json(newProduct)
  }
  catch(err){
    next(err)
  }
})


module.exports = router
