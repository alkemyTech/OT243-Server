const { OK, INTERNAL_SERVER_ERROR, FORBIDDEN, RESOURCE_NOT_FOUND } = require('../utils/httpCodes');
const UserService = require("../services/user");
const bcryptjs = require('bcryptjs');

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

module.exports = { loginUser };