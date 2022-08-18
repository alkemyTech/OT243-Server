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

  static async update({ id }, data) {
    const { name, content, image } = data;

    // Search in DB
    const activity = await Activity.findByPk(id);

    // Check if it exists or not
    if (!activity) throw new Error('Activity Not Found with that id');

    // Update activity
    activity.set({
      name,
      content,
      image,
    });
    await activity.save();

    return activity;
  }
}

module.exports = ActivityService;
