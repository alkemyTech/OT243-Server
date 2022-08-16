const express = require('express');
const router = express.Router();
const { updateTestimonial,createTestimonial} = require('../controllers/testimonialController')
const {validateTestimonial} = require( '../validators/testimonialValidator')
const CheckRole= require('../middlewares/checkRole');
const { validateJWT } = require('../utils/jasonWebToken')

router.put('/:id',validateJWT,CheckRole.isAdmin ,updateTestimonial)

router.post('/',validateJWT,CheckRole.isAdmin ,validateTestimonial,createTestimonial)

module.exports = router;
