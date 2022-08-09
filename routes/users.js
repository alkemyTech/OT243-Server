const express = require('express');
const router = express.Router();

const { createUser, loginUser, updateUser, deleteUser, getMyData } = require('../controllers/userController');
const { validateJWT } = require('../utils/jasonWebToken');
const { validateUserLogin, validateUserRegister, validateUserUpdate } = require('../validators/usersValidator');

/* POST Create User - URL: ../users/auth/register */
router.post('/auth/register', validateUserRegister, createUser);

/* POST Login User - URL: ../users/auth/login */
router.post('/auth/login', validateUserLogin, loginUser);

/* GET My data User - URL: ../users/auth/me */
router.get('/auth/me', validateJWT, getMyData );

/* PATCH Update User - URL: ../users/:id */
router.patch('/:id', validateUserUpdate, updateUser);

/* DELETE Delete User - URL: ../users/:id */
router.delete('/:id', deleteUser);

// Esta ruta deberá imeplementarse dentro del archivo de rutas de Contactos
/* GET List of Contacts User - URL: ../contacts */
router.get('/contacts', validateJWT, getContacts);
// Esta ruta deberá imeplementarse dentro del archivo de rutas de Contactos

module.exports = router;