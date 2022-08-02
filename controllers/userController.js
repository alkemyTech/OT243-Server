const { OK, INTERNAL_SERVER_ERROR, FORBIDDEN, RESOURCE_NOT_FOUND, CLIENT_ERROR } = require('../utils/httpCodes');
const UserService = require("../services/user");

const WelcomeMailService = require('../services/welcomEmail')


const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../utils/jasonWebToken');
const encriptPass = require('../utils/encriptPass');

// Create User Controller
const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const data = { firstName, lastName, email, password };

  // Encrypt password with bcryptjs
  const salt = bcryptjs.genSaltSync();
  data.password = bcryptjs.hashSync(data.password, salt);


  try {
    // Create User in Data Base
    const { id, firstName, lastName, email } = await UserService.create(data);
    console.log();
    res.status(OK).json({
      msg: 'User created',
      data: {
        id,
        firstName,
        lastName,
        email,
        welcomeEmailSend
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
      const validPassword = bcryptjs.compareSync(password, user.password);

      // Send only name, last name, and email as a token's payload 
      if (validPassword) {
        const payloadToken = {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        };
        const token = await generateJWT(payloadToken);

        res.status(OK).json({
          msg: 'Login Ok',
          token
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
};

// Delete User Controller
const deleteUser = async (req, res) => {
  try {
    const userDeleted = await UserService.userDelete(req.params.id);

    if (userDeleted) {
      res.status(OK).json({
        msg: 'The user was delted'
      });
    } else if (!userDeleted) {
      res.status(CLIENT_ERROR).json({
        msg: 'Invalid ID'
      });
    }

  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({
      msg: 'Delete error',
      message: error,
    });
  }
};

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

module.exports = { createUser, loginUser, updateUser, deleteUser };
