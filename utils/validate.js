const { validationResult}=require('express-validator');
const httpStatus = require('./httpStatus')


const validateResult = (req,res,next)=>{
    try {
        validationResult(req).throw()
        return next()
    } catch (error) {
        res.status(httpStatus.FORBIDDEN)
        res.send({errors:error.array()})
        
    }
}

module.exports={validateResult}