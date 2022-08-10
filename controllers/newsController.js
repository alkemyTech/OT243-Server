const NewsService = require('../services/news');
const { urlPages } = require('../utils/pagination');
const {
  OK,
  CREATED,
  DELETED,
  FORBIDDEN,
  UNAUTHORIZED,
  INTERNAL_SERVER_ERROR,
} = require('../utils/httpCodes');

// GET ALL
const getAllNews = async (req, res) => {
  try {


    // Consult service -> db

    const news = await NewsService.getAll(req.query);

    // PAGINATION
    // Pages: previous, current, next, total.
    const pages = urlPages(req, 'news');
    const totalPages = Math.ceil(news.count / req.query.size);

    res.status(OK).json({
      status: 'success',
      pages: {
        totalPages,
        ...pages,
      },
      data: {
        news: news.rows,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: `${err}`,
    });
  }
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
    res.status(INTERNAL_SERVER_ERROR).json({
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
    res.status(INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: err,
    });
  }
};

// UPDATE
const updateNews = async (req, res) => {
  try {
    const newsUpdated = await NewsService.update(req.params, req.body);
    res.status(CREATED).json({
      status: 'success',
      data: {
        news: newsUpdated,
      },
    });
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: err.message,
    });
  }
};

// DELETE
const deleteNews = async (req, res) => {
  try {
    await NewsService.delete(req.params);
    res.status(DELETED).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(INTERNAL_SERVER_ERROR).json({
      status: 'error',
      message: err.message,
    });
  }
};

module.exports = {
  getAllNews,
  getNews,
  createNews,
  updateNews,
  deleteNews,
};
