const express = require('express');
const newsController = require('../controllers/newsController');
const { validateCreate } = require('../validators/newsValidator');
const { getCommentByNewId } = require("../controllers/commentController");
const router = express.Router();

// TODO: Implement Protected Route for admin
router
  .route('/')
  .get(newsController.getAllNews)
  .post(validateCreate, newsController.createNews);


router.route('/:id').get(newsController.getNews).put(newsController.updateNews);

router.get("/:id/comments",getCommentByNewId);

router
  .route('/:id')
  .get(newsController.getNews)
  .put(newsController.updateNews)
  .delete(newsController.deleteNews);


module.exports = router;
