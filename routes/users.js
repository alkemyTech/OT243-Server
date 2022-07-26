var express = require('express');
const { body } = require('express-validator');
var router = express.Router();

const { createUser } = require('../controllers/userController');

const validateUser = [ // Constraints must to be defined
  // Validate name
  body('firstName', 'Ingrese un nombre válido')
    .exists()
    .isLength({ min: 2 }),
  // Validate Suername
  body('lastName', 'Ingrese un apellido válido')
    .exists()
    .isLength({ min: 2 }),
  // Validate Email
  body('email', 'Ingrese un email válido')
    .exists()
    .isEmail(),
  // Validate Password Length
  body('password', 'La contraseña debe tener mas de 5 caracteres')
    .isLength({ min: 5 }),
];

/* POST Create User - URL: ../users/auth/register */
router.post('/auth/register', validateUser, createUser);

module.exports = router;