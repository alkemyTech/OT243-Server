const { body, validationResult } = require('express-validator');
const { CLIENT_ERROR } = require('../utils/httpCodes');

const errorHandler = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
        res.status(CLIENT_ERROR).json({ error: error.array() });
        console.log(error);
    } else {
        next();
    }
}

const validateContactCreate = [ // Constraints must to be defined
    // Validate Name
    body('name', 'Ingrese un nombre válido')
        .exists()
        .isLength({ min: 2 }),
    // Validate Email
    body('email', 'Ingrese un email válido')
        .exists()
        .isEmail(),
    errorHandler
];

module.exports = {
    validateContactCreate,
};