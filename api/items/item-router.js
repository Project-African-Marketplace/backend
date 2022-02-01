const express = require('express')
const router = express.Router();
const {addProduct} = require('./items-model')
router.post('/', async (req,res,next)=> {
    try{

        const resp = await addProduct(req.body)
        res.status(201).json(resp)
    }
    catch(err){
        next(err)
    }
})

module.exports = router