const express = require('express');
const router = express.Router();
const {getAllComments}= require('../controllers/commentController')
const CheckRole= require('../middlewares/checkRole');
const { validateJWT } = require('../utils/jasonWebToken')



router.get('/',validateJWT,CheckRole.isAdmin, getAllComments)


module.exports = router;