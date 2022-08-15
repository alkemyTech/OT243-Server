const { check, body,param } = require('express-validator');
const { validateResult } = require('../utils/validate');


const validateComment = [
    check("body").isString().exists(),
    check("user_id").exists().isNumeric(),
    check("news_id").exists().isNumeric(),
    (req, res, next) => validateResult(req,res,next)
]



module.exports = {
    validateComment, 
};