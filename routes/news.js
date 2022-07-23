const express = require('express');
const newsController = require('../controllers/newsController');
const { validateCreate } = require('../validators/newsValidator');

const router = express.Router();

// TODO: Implement Protected Route for admin
router.route('/').post(validateCreate, newsController.createNews);

module.exports = router;
