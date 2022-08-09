const { Activity } = require('../models/index');

class ActivityService {
  static async create(data) {
    const { name, content, image } = data;

    // Store activity in Database
    return await Activity.create({
      name,
      content,
      image,
    });
  }
}

module.exports = ActivityService;
