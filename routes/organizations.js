const express = require('express');
const router = express.Router();
const {getOrganizations,updateOrganizations} = require('../controllers/organizationsController')
const {validateOrganization} =require('../validators/organizationsValidator')
const CheckRole= require('../middlewares/checkRole');
const { validateJWT } = require('../utils/jasonWebToken')

router.get('/public/:id',validateJWT,CheckRole.isAdmin,getOrganizations)

router.post('/public/:id',validateJWT,CheckRole.isAdmin,validateOrganization,updateOrganizations)


module.exports = router;
