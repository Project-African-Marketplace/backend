const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const userRouter = require('./user/user-router');
const productRouter = require('./items/item-router');
const User = require('./user/user-model');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());
server.use('/api/auth', userRouter);
server.use('/api/products', productRouter);


server.get('/', async (req, res, next) => {
  const response = await User.getAllUsers();
  res.status(200).json(response);
});

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message
  });
});

module.exports = server;
