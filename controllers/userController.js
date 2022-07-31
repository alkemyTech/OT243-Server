const { OK, CLIENT_ERROR, INTERNAL_SERVER_ERROR, FORBIDDEN, RESOURCE_NOT_FOUND } = require('../utils/httpCodes');
const UserService = require("../services/user");
const WelcomeMailService = require('../services/welcomEmail')
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
      const welcomeEmailSend= await WelcomeMailService.welcomeMail(user)
      res.status(OK).json({
        msg: 'User created',
        data: {
          user,
          welcomeEmailSend
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

// Login User Controller
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if email exist in the DB and get user's values 
    const user = await UserService.userLogin(email);

    if (user === null) {
      res.status(RESOURCE_NOT_FOUND).json({
        msg: 'Mail not found in the DB',
        ok: false
      });
    } else {
      // Check password with bcryptjs
      const validPassword = bcryptjs.compareSync(password, user.password);
      if (validPassword) {
        res.status(OK).json({
          msg: 'Login Ok',
          data: {
            user,
          },
        });
      } else {
        res.status(FORBIDDEN).json({
          msg: 'Incorrect password',
          ok: false
        });
      }
    }
    
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({
      msg: 'Login error',
      message: error,
    });
  }
}

module.exports = { createUser, loginUser };
