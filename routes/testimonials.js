const express = require('express');
const router = express.Router();
const { updateTestimonial} = require('../controllers/testimonial')
const CheckRole= require('../middlewares/checkRole');
const { validateJWT } = require('../utils/jasonWebToken')

router.put('/:id',validateJWT,CheckRole.isAdmin ,updateTestimonial)

module.exports = router;
