const express = require("express")
const User = require('./user-model')
const {checkUsernameExists} = require('../user/user-middleware')
const {tokenMaker,JWT_SECRET } = require('../secrets')
const bcrypt = require('bcryptjs')
const router = express.Router()

router.post('/register',async (req,res,next) => {
    try{
        const {username,password} = req.body
        const hash = bcrypt.hashSync(password,8)
        const response = await User.insertUser({username,password:hash})
        res.status(201).json(response)
    }
    catch(err){
        next(err)
    }
})

router.post('/login',checkUsernameExists,async (req,res,next)=> {
    try{
        const {password} = req.body
        if(bcrypt.compareSync(password,req.user.password)){
            const token = tokenMaker(req.user)
            res.status(200).json({message: `${req.body.username} is back`,token})
        }
        else{
            res.status(401).json({message:'Invalid credentials'})
        }    
    }
    catch(err){
        next(err)
    }

})

router.put('/:id',checkUsernameExists, async (req,res,next) => {
    try{
        const {id} = req.params
        const response = await User.updateUser(id,req.body)
        res.status(201).json(response)
    }
    catch(err){
        next(err)
    }
})

module.exports = router