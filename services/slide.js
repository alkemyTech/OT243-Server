const { Slide } = require('../models/index');

class SlideService {
    static async getSlide(id) {
        return await Slide.findByPk(id);
    }
    static async deleteSlide(id) {
        return await Slide.destroy({ where: { id } });
    }
}

module.exports = SlideService;