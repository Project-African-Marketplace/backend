const express = require("express")
const User = require('./user-model')
const {checkUsernameExists,validateUser,checkCredentials} = require('../user/user-middleware')
const {tokenMaker } = require('../secrets')
const bcrypt = require('bcryptjs')
const router = express.Router()

router.post('/register',checkCredentials,validateUser,async (req,res,next) => {
    try{
        const {username,password,role_name} = req.body
        const hash = bcrypt.hashSync(password,8)
        const response = await User.insertUser({username,password:hash,role_name})
        res.status(201).json(response)
    }
    catch(err){
        next(err)
    }
})

router.post('/login',checkCredentials,checkUsernameExists,async (req,res,next)=> {
    try{
        const {password} = req.body
        if(bcrypt.compareSync(password,req.user.password)){
            const token = tokenMaker(req.user)
            res.status(200).json({message: `Welcome ${req.body.username}!`,token})
        }
        else{
            res.status(401).json({message:'Invalid credentials'})
        }    
    }
    catch(err){
        next(err)
    }

})


module.exports = router