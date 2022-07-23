const { check } = require('express-validator');
const { validateResult } = require('../utils/validate');

const validateCreate = [
  check('name').exists().not().isEmpty(),
  check('content').exists().not().isEmpty(),
  check('image').exists().not().isEmpty(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreate };
