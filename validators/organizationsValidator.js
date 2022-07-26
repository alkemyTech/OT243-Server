const {check}= require('express-validator');
const {validateResult}= require('../utils/validate')


const validateOrganization=[

    check('name')
        .exists()
        .not()
        .isEmpty()
        .trim()
        .isString()
        .isLength({min:3}),
    check('image')
        .exists()
        .not()
        .isEmpty()
        .isString()
        .trim(),
    check('address')
        .exists()
        .not()
        .isEmpty()
        .trim()
        .isString(),
    check('phone')
        .exists()
        .not()
        .isEmpty()
        .isString(),
    check('email')
        .exists()
        .not()
        .isEmpty()
        .trim()
        .isEmail(),
    check('welcomeText')
        .exists()
        .not()
        .isEmpty()
        .trim()
        .isString()
        .isLength({min:10}),
    check('aboutUsText')
        .exists()
        .not()
        .isEmpty()
        .trim()
        .isString()
        .isLength({min:10}),
    (req,res,next)=>{
            validateResult(req,res,next)
    }

]

module.exports= {validateOrganization }