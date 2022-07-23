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
}

module.exports = NewsService;
