var express = require('express');
var router = express.Router();

const { loginUser } = require('../controllers/userController');
const { validateUserLogin } = require('../validators/usersValidator');

/* POST Login User - URL: ../users/auth/login */
router.post('/auth/login', validateUserLogin, loginUser);

module.exports = router;
