const { Slide } = require('../models/index');

class SlideService {
    static async getSlide(id) {
        return await Slide.findByPk(id);
    }
}

module.exports = SlideService;