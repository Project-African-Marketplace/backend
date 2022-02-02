//restricted middleware
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../secrets');
const db = require('../data/db-config');

const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next({
      status: 401,
      message: 'Token required'
    });
  }
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err) {
      next({
        status: 401,
        message: 'Token invalid'
      });
    } else {
      req.decodedToken = decodedToken;
      next();
    }
  });
};

const invalidCategory = async (req, res, next) => {
  const { id } = req.params;
  const category_id = await db('category as c')
    .where('category_id', id)
    .first();

  if (!category_id) {
    next({
      status: 400,
      message: 'Invalid Category'
    });
  } else {
    next();
  }
};

module.exports = {
  restricted,
  invalidCategory
};

