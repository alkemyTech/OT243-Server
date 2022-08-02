const { News } = require('../models/index');

class NewsService {
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
}

module.exports = NewsService;
