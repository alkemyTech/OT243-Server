const express = require('express');
const router = express.Router();
const { createUser, loginUser, deleteUser } = require('../controllers/userController');
const { validateUserLogin, validateUserRegister } = require('../validators/usersValidator');

/* POST Create User - URL: ../users/auth/register */
router.post('/auth/register', validateUserRegister, createUser);

/* POST Login User - URL: ../users/auth/login */
router.post('/auth/login', validateUserLogin, loginUser);

/* POST Delete User - URL: ../users/:id */
router.delete('/:id', deleteUser);

module.exports = router;