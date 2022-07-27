const { body } = require('express-validator');
const { validationResult } = require('express-validator');
const { CLIENT_ERROR } = require('../utils/httpCodes');

const errorHandler = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(CLIENT_ERROR).json({ error: error.array() });
        console.log(error);
    }
    next()
}

const validateUserLogin = [
    body('email', 'Invalid email')
        .exists()
        .isEmail(),
    body('password', 'Invalid Password')
        .isLength({ min: 5 }),
    errorHandler
];

module.exports = {
    validateUserLogin
};