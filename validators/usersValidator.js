const { body } = require('express-validator');
const { validateResult, errorHandlerLogin } = require("../utils/validate");

module.exports = {
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
const errorHandler = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(CLIENT_ERROR).json({ error: error.array() });
        console.log(error);
    } else {
        next();
    }
}

const validateUserRegister = [ // Constraints must to be defined
// Validate Name
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
    errorHandler
  ];
  
  const validateUserLogin = [
    // Validate Email
    body('email', 'Invalid email')
    .exists()
    .isEmail(),
    // Validate Password
    body('password', 'Invalid Password')
    .isLength({ min: 5 }),
    errorHandler
  ];

module.exports = {
    validateUserRegister,
    validateUserLogin
};
