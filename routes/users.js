var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const { loginUser } = require('../controllers/userController');

const validateLogin = [
  // Validate Email
  body('email', 'Ingrese un email válido')
      .exists()
      .isEmail(),
  // Validate Password Length
  body('password', 'Ingrese una contraseña válida')
      .isLength({ min: 5 }),
];

/* POST Login User - URL: ../users/auth/login */
router.post('/auth/login', validateLogin, loginUser);

module.exports = router;
