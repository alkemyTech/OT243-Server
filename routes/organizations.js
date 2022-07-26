const express = require('express');
const router = express.Router();
const {getOrganizations,updateOrganizations} = require('../controllers/organizationsController')
const {validateOrganization} =require('../validators/organizationsValidator')

/*****************PENDIENTE DE IMPLEMENTAR  EL MIDDLE   DE AUTH ROLE  ISADMIN */
const isAdmin=(req,res,next)=>{
    console.log("pasae por isadmin");
    next()
}
/********************************************************************* */



router.post('/public/:id',isAdmin,validateOrganization,updateOrganizations)


module.exports = router;
