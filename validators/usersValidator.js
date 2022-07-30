const { body } = require('express-validator');
const { validateResult, errorHandlerLogin } = require("../utils/validate");

module.exports = {
    validateUserLogin: [
      body('email', 'Invalid email')
        .exists()
        .isEmail(),
      body('password', 'Invalid Password')
        .isLength({ min: 5 }),
      errorHandlerLogin
    ],
    validateUserPost: [ // Constraints must to be defined
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
      validateResult
    ],
}
