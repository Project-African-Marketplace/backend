const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const userRouter = require('./user/user-router')



const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())
server.use('/api', userRouter)


server.use((err,req,res,next) => {
  res.status(500).json({
    message: err.message
  })
})

module.exports = server
