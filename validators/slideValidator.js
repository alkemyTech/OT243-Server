const { body, check, validationResult } = require('express-validator');
const { isAdmin } = require('../middlewares/checkRole');
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
const validateSlideGet = [ // Constraints must to be defined
// Validate Name
    validateJWT,
    isAdmin,
    check('id', 'Insert valid id').notEmpty().isInt(),
    errorHandler
  ];

const validateSlideGetList = [ // Constraints must to be defined
// Validate Name
    validateJWT,
    errorHandler
  ];

const validateSlideDelete = [ // Constraints must to be defined
// Validate Name
    validateJWT,
    check('id', 'Insert valid id').notEmpty().isInt(),
    errorHandler
  ];

const validateSlideCreate = [
    validateJWT,
    isAdmin,
    check('file', 'file required').notEmpty(),
    check('text', 'text required').notEmpty(),
    check('text', 'text to be string').isString(),
    check('organizationId', 'organizationId required').notEmpty(),
    check('organizationId', 'organizationId to be integer').isInt(),
    errorHandler
];

const validateSlideUpdate = [
    validateJWT,
    isAdmin,
    check('id', 'id required').notEmpty(),
    check('id', 'id to be int').isInt(),
    check('file', 'file required').notEmpty(),
    check('text', 'text required').notEmpty(),
    check('text', 'text to be string').isString(),
    check('organizationId', 'organizationId required').notEmpty(),
    check('organizationId', 'organizationId to be integer').isInt(),
    errorHandler
];

module.exports = {
    validateSlideGet,
    validateSlideCreate,
    validateSlideUpdate,
    validateSlideDelete,
    validateSlideGetList,
};
