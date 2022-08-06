const { Slide } = require('../models/index');

class SlideService {
    static async getSlide(id) {
        return await Slide.findByPk(id);
    }
    static async getListSlide() {
        const lista = await Slide.findAll();
        return lista.length === 0 
            ? [] 
            : lista.map(({ order, imageUrl }) => ({ order, imageUrl }));
    }
}

module.exports = SlideService;