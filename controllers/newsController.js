const NewsService = require('../services/news');
const {
  OK,
  CREATED,
  DELETED,
  FORBIDDEN,
  UNAUTHORIZED,
  SERVER_ERROR,
} = require('../utils/httpCodes');

// GET ALL
const getAllNews = async (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'This route is not yet defined!',
  });
};

// GET ONE
const getNews = async (req, res) => {
  try {
    const news = await NewsService.getOne(req.params);
    res.status(OK).json({
      status: 'success',
      data: {
        news,
      },
    });
  } catch (err) {
    res.status(SERVER_ERROR).json({
      status: 'error',
      message: err,
    });
  }
};

// POST
const createNews = async (req, res) => {
  try {
    const newNews = await NewsService.create(req.body);

    res.status(CREATED).json({
      status: 'success',
      data: {
        news: newNews,
      },
    });
  } catch (err) {
    res.status(SERVER_ERROR).json({
      status: 'error',
      message: err,
    });
  }
};

// UPDATE
const updateNews = (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'This route is not yet defined!',
  });
};

// DELETE
const deleteNews = (req, res) => {
  res.status(204).json({
    status: 'success',
    message: 'This route is not yet defined!',
    data: null,
  });
};

module.exports = {
  getAllNews,
  getNews,
  createNews,
  updateNews,
  deleteNews,
};
