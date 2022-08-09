const { check } = require('express-validator');
const { validateResult } = require('../utils/validate');

const validateActivity = [
  check('name').exists().not().isEmpty(),
  check('content').exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateActivity };
