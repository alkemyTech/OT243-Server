const  express = require('express');
const  router = express.Router();
const { getAllBackOfficeContact, createContact }=require('../controllers/contactController')
const CheckRole= require('../middlewares/checkRole');
const { validateJWT } = require('../utils/jasonWebToken');
const { validateContactCreate } = require('../validators/contactsValidator');


router.get('/backoffice/contacts',validateJWT ,CheckRole.isAdmin, getAllBackOfficeContact)

router.post('/', validateContactCreate, createContact);

module.exports= router