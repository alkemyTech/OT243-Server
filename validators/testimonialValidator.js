const {check}= require('express-validator');
const {validateResult}= require('../utils/validate')


const validateTestimonial=[

    check('name')
        .exists()
        .not()
        .isEmpty()
        .trim()
        .isString()
        .isLength({min:3}),
    check('content')
        .exists()
        .not()
        .isEmpty()
        .trim()
        .isString()
        .isLength({min:5}),
    (req,res,next)=>{
            validateResult(req,res,next)
    }

]

module.exports= { validateTestimonial }