const { check, body,param } = require('express-validator');
const { validateResult } = require('../utils/validate');


const validateCreateCategory = [
    check("name").exists().notEmpty().isString(),
    (req, res, next) => validateResult(req,res,next)
]

const validateDeleteCategory = [
    param("id").exists().isNumeric(),
    (req, res, next) => validateResult(req,res,next)
]



module.exports = {
    validateCreateCategory,
    validateDeleteCategory,
};