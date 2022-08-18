const express = require('express');
const router = express.Router();
const { updateTestimonial,deleteTestimonial} = require('../controllers/testimonialController')
const CheckRole= require('../middlewares/checkRole');
const { validateJWT } = require('../utils/jasonWebToken')

router.put('/:id',validateJWT,CheckRole.isAdmin ,updateTestimonial)


router.delete('/:id',validateJWT,CheckRole.isAdmin , deleteTestimonial)

module.exports = router;
