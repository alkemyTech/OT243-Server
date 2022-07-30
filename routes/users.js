var express = require('express');
var router = express.Router();

const { createUser, loginUser } = require('../controllers/userController');
const { validateUserLogin,validateUserPost } = require('../validators/usersValidator');

/* POST Login User - URL: ../users/auth/login */
router.post('/auth/login', validateUserLogin, loginUser);

/* POST Create User - URL: ../users/auth/register */
router.post('/auth/register', validateUserPost, createUser);

/* PATCH Update User - URL: ../users/:id */
router.patch('/users/:id', updateUser);

module.exports = router;