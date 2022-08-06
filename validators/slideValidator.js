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

module.exports = {
    validateSlideGet,
    validateSlideGetList,
};
