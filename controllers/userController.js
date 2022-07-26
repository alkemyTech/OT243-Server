const { OK, CLIENT_ERROR, INTERNAL_SERVER_ERROR } = require('../utils/httpCodes');
const UserService = require("../services/user");
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

// Create User Controller
const createUser = async (req, res) => {

  // Validate with Express-Validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(CLIENT_ERROR).json({ errors: errors.array() });
    console.log(errors);
  } else {
    const { firstName, lastName, email, password } = req.body;
    const data = { firstName, lastName, email, password };
    
    // Encrypt password with bcryptjs
    const salt = bcryptjs.genSaltSync();
    data.password = bcryptjs.hashSync(data.password, salt);

    try {
      // Create User in Data Base
      const user = await UserService.create(data);
      res.status(OK).json({
        msg: 'User created',
        data: {
          user,
        },
      });
    } catch (error) {
      res.status(INTERNAL_SERVER_ERROR).json({
        msg: 'Error',
        message: error,
      });
    }
  }
};

module.exports = { createUser };