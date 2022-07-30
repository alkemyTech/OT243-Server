var express = require('express');
var router = express.Router();
const { createUser, loginUser } = require('../controllers/userController');
const { validateUserLogin, validateUserRegister } = require('../validators/usersValidator');

/* POST Create User - URL: ../users/auth/register */
router.post('/auth/register', validateUserRegister, createUser);

/* POST Login User - URL: ../users/auth/login */
router.post('/auth/login', validateUserLogin, loginUser);
 
module.exports = router;