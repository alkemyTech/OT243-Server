const express = require('express');
const newsController = require('../controllers/newsController');
const { validateCreate } = require('../validators/newsValidator');

const router = express.Router();

// TODO: Implement Protected Route for admin
router
  .route('/')
  .get(newsController.getAllNews)
  .post(validateCreate, newsController.createNews);
router.route('/:id').get(newsController.getNews).put(newsController.updateNews);

module.exports = router;
