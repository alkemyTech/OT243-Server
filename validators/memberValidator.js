const { check } = require('express-validator');
const { validateResult } = require('../utils/validate');

const validateMember = [
  check('name').exists().not().isEmpty().isString(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateMember };
