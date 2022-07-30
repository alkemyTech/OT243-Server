const { OK, INTERNAL_SERVER_ERROR, FORBIDDEN, RESOURCE_NOT_FOUND } = require('../utils/httpCodes');
const UserService = require("../services/user");
const { encriptPass, validPass } = require('../utils/encriptPass');

// Create User Controller
const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const data = { firstName, lastName, email, password };
  
  // Encrypt password with bcryptjs
  data.password = encriptPass(data.password);
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
      const validPassword = validPass(password, user.password);
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

const updateUser = async (req, res) => {
  const { id } = req.params
  const { password, firstName, lastName, email } = req.body
  try {
    const existe = await UserService.userExist(id);
    if (!existe) return res.status(RESOURCE_NOT_FOUND).json({ "message": "User not found!!" });
    const newPass = encriptPass(password);
    await UserService.userUpdate(id, { firstName, lastName, email, password: newPass });
    return res.status(OK).json({ message: 'Datos de usuario actulizados'});
  } catch (error) {
    console.log(error);
    return res.status(500).json({message: 'Internal Error'});    
  }
}

module.exports = { createUser, loginUser, updateUser };
