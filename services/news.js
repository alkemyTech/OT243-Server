const { News } = require('../models/index');

class NewsService {
  static async getAll(query) {
    // PAGINATION
    // 1. Parse query string to number
    const pageNum = +query.page;
    const sizeNum = +query.size;

    // 1.1 Data validation
    let page = 0;
    if (!Number.isNaN(pageNum) && pageNum > 0) {
      page = pageNum;
    }

    let size = 10;
    if (!Number.isNaN(sizeNum) && sizeNum > 0) {
      size = sizeNum;
    }

    // 1.2 List All News
    return await News.findAndCountAll({
      limit: size,
      offset: page * size,
    });
  }

  static async create(data) {
    const { name, content, image, categoryId } = data;

    // Store news in Database
    return await News.create({
      name,
      content,
      image,
      categoryId,
    });
  }

  static async getOne({ id }) {
    // Find a news in Database
    return await News.findOne({
      where: {
        id,
      },
    });
  }

  static async update({ id }, data) {
    const { name, content, image, categoryId } = data;

    // Search in DB
    const news = await News.findByPk(id);

    // Check if it exists or not
    if (!news) throw new Error('No news found with that ID');

    // Update news
    news.set({
      name,
      content,
      image,
      categoryId,
    });
    await news.save();

    return news;
  }

  static async delete({ id }) {
    // Delete a news
    const news = await News.destroy({
      where: {
        id,
      },
    });

    // Check if it exists or not
    if (!news) throw new Error('No news found with that ID');
    return 1;
  }
}

module.exports = NewsService;
