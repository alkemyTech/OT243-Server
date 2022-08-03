const express = require('express');
const router = express.Router();

const { createUser, loginUser, updateUser } = require('../controllers/userController');
const { validateUserLogin, validateUserRegister, validateUserUpdate } = require('../validators/usersValidator');

/* POST Create User - URL: ../users/auth/register */
router.post('/auth/register', validateUserRegister, createUser);

/* POST Login User - URL: ../users/auth/login */
router.post('/auth/login', validateUserLogin, loginUser);

/* PATCH Update User - URL: ../users/:id */
router.patch('/:id', validateUserUpdate, updateUser);

/* POST Delete User - URL: ../users/:id */
// router.delete('/:id', deleteUser);

module.exports = router;