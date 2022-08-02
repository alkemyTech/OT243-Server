const { validationResult } = require('express-validator');
const { FORBIDDEN, CLIENT_ERROR } = require('../utils/httpCodes')

const validateResult = (req, res, next) => {
  console.log('entre al validate result');
  try {
    validationResult(req).throw();
    return next();
  } catch (err) {
    res.status(FORBIDDEN).json({
      status: 'error',
      message: { errors: err.array() },
    });
  }
};

const errorHandlerLogin = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
      res.status(CLIENT_ERROR).json({ error: error.array() });
      console.log(error);
  }
  next()
}

module.exports = {
  validateResult,
  errorHandlerLogin,
};
