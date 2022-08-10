const { OK, INTERNAL_SERVER_ERROR, FORBIDDEN, RESOURCE_NOT_FOUND, CLIENT_ERROR } = require('../utils/httpCodes');

const UserService = require("../services/user");
const WelcomeMailService = require('../services/welcomEmail')

const { generateJWT } = require('../utils/jasonWebToken');
const { encriptPass, validPass } = require('../utils/encriptPass');

// Create User Controller
const createUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  const data = { firstName, lastName, email, password, roleId: 2 }; // Role Id 2 (Standard) by default

  // Encrypt password with bcryptjs
  data.password = encriptPass(data.password);

  try {
    // Create User in Data Base
    const { id, firstName, lastName, email } = await UserService.create(data);
    const user = { firstName, lastName, email }

    const welcomeEmailSend = await WelcomeMailService.welcomeMail(user)

    const payloadToken = {
      id,
      firstName,
      lastName,
      email
    };

    const token = await generateJWT(payloadToken);

    return res.status(OK).json({
      msg: 'User created',
      data: {
        id,
        firstName,
        lastName,
        email,
        welcomeEmailSend,
        token
      },
    });

  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      msg: 'Error',
      message: error
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
      return res.status(CLIENT_ERROR).json({
        msg: 'Invalid email',
        ok: false
      });
    }

    // Check password with bcryptjs
    const validPassword = validPass(password, user.password);

    if (!validPassword) {
      return res.status(FORBIDDEN).json({
        msg: 'Incorrect password',
        ok: false
      });
    }

    const payloadToken = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email
    };

    const token = await generateJWT(payloadToken);

    return res.status(OK).json({
      msg: 'Login Ok',
      token
    });

  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      msg: 'Login error',
      message: error
    });
  }
};

// Delete User Controller
const deleteUser = async (req, res) => {

  try {
    const userDeleted = await UserService.userDelete(req.params.id);

    if (!userDeleted) {
      return res.status(CLIENT_ERROR).json({
        msg: 'Invalid ID'
      });
    }

    return res.status(OK).json({
      msg: 'The user was delted'
    });

  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      msg: 'Delete error',
      message: error
    });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params
  const { password, firstName, lastName, email } = req.body

  try {
    const existe = await UserService.userExist(id);

    if (!existe) {
      return res.status(RESOURCE_NOT_FOUND).json({
        msg: "User not found",
        message: error
      });
    }

    const newPass = encriptPass(password);
    await UserService.userUpdate(id, { firstName, lastName, email, password: newPass });

    return res.status(OK).json({
      msg: 'User updated'
    });

  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      msg: 'Internal Error',
      message: error
    });
  }
}

const getMyData = async (req, res) => {
  // Get user id from payload token
  const userId = req.payloadToken.userData.id;

  try {
    const userData = await UserService.getUser(userId);
    const userIsAdmin = userData.dataValues.roleId;

    // Check if the User has Admin role
    if (userIsAdmin !== 1) {
      return res.status(FORBIDDEN).json({
        msg: 'User role is not Admin'
      });
    }

    const allUsers = await UserService.getAllUsers();

    return res.status(OK).json({
      data: allUsers  
    });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      msg: 'Get all users error',
      message: error
    });
  }
};

module.exports = {
  createUser,
  loginUser,
  updateUser,
  deleteUser,
  getMyData
};