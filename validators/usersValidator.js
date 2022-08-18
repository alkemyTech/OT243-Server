const { body, check, validationResult } = require('express-validator');
const { ownership } = require('../middlewares/Ownership');
const { CLIENT_ERROR } = require('../utils/httpCodes');
const { validateJWT } = require('../utils/jasonWebToken');

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
    body('firstName', 'Invalid Name')
        .exists()
        .isLength({ min: 2 }),
    // Validate Suername
    body('lastName', 'Invalid Last Name')
        .exists()
        .isLength({ min: 2 }),
    // Validate Email
    body('email', 'Invalid Email')
        .exists()
        .isEmail(),
    // Validate Password Length
    body('password', 'Invalid Password')
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

const validateUserUpdate = [
    check('id', 'Id required')
        .notEmpty(),
    validateJWT,
    ownership,
    errorHandler
];

module.exports = {
    validateUserRegister,
    validateUserLogin,
    validateUserUpdate
};
