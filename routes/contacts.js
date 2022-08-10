const  express = require('express');
const  router = express.Router();
const { getAllBackOfficeContact }=require('../controllers/contactController')
const CheckRole= require('../middlewares/checkRole');
const { validateJWT } = require('../utils/jasonWebToken')


router.get('/backoffice/contacts',validateJWT ,CheckRole.isAdmin, getAllBackOfficeContact)


module.exports= router