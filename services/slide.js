const { Slide } = require('../models/index');
const base64js = require('base64-js');

class SlideService {
    static async getSlide(id) {
        return await Slide.findByPk(id);
    }
    static async deleteSlide(id) {
        return await Slide.destroy({ where: { id } });
    }
    static async createSlide({ file, order, text, organizationId }) {
        let indexOrder;
        const image = base64js.toByteArray(file);
        //funcion para cargar imagen en aws s3 y devolver url 
        if (!order) {
            indexOrder = await Slide.count();
            indexOrder++;
        }
        return await Slide.create({
            text,
            organizationId,
            imageUrl: 'urlgenerica',
            order: order || indexOrder,
        });
    }
}

module.exports = SlideService;