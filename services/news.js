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
}

module.exports = NewsService;
