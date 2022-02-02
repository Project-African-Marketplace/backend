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

router.post('/', async (req,res,next)=> {
    try{

        const resp = await items.addProduct(req.body)
        res.status(201).json(resp)
    }
    catch(err){
        next(err)
    }
})

module.exports = router

