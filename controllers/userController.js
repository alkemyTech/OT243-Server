const { OK, CLIENT_ERROR, INTERNAL_SERVER_ERROR, FORBIDDEN } = require('../utils/httpCodes');
const UserService = require("../services/user");
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

// BORRAR
const { User } = require('../models/index');
// BORRAR

// Login User Controller
const loginUser = async (req, res) => {
  // Validate with Express-Validator
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(CLIENT_ERROR).json({ errors: errors.array() });
    console.log(errors);
  } else {
    const { email, password } = req.body;
    //const data = { email, password };

    try {
      // Check if email exist en DB and get user values 
      const user = await UserService.userLogin(email);

      // Check password with bcryptjs
      const validPassword = bcryptjs.compareSync(password, user.password);

      if (validPassword) {
        res.status(OK).json({
          msg: 'Login',
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

    } catch (error) {
      res.status(INTERNAL_SERVER_ERROR).json({
        msg: 'Login error',
        message: error,
      });
    }
  }
}

module.exports = { loginUser };