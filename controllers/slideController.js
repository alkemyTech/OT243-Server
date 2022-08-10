const SlideService = require('../services/slide');
const { OK, RESOURCE_NOT_FOUND } = require('../utils/httpCodes');
const { INTERNAL_SERVER_ERROR, CREATED } = require('../utils/httpStatus');

module.exports = {
  getSlide: async function(req, res) {
    const { id } = req.params;
    try {
      const slide = await SlideService.getSlide(id)
      if (!slide) return res.status(RESOURCE_NOT_FOUND).json({
        message: 'resource not found',
      });
      return res.status(OK).json({ message: 'resource found', slide }); 
    } catch (error) {
      console.log(error);
      return res.status(INTERNAL_SERVER_ERROR).json({
        message: 'Internal Error, call sys admin',
      });
    }
  },
  deleteSlide: async function(req, res) {
    const { id } = req.params;
    try {
      const existe = await SlideService.getSlide(id);
      if (!existe) return res.status(RESOURCE_NOT_FOUND).json({
        message: 'Resource not found',
      });
      await SlideService.deleteSlide(id);
      return res.status(OK).json({
        message: 'Resource deleted',
      });
    } catch (error) {
      console.log(error);
      return res.status(INTERNAL_SERVER_ERROR).json({
        message: 'Internal Error, call sys admin',
      });
    }
  },
  createSlide: async function(req, res) {
    const { body } = req;
    try {
      await SlideService.createSlide(body);
      return res.status(CREATED).json({ message: 'Slide created' })
    } catch (error) {
      console.log(error);
      return res.status(INTERNAL_SERVER_ERROR).json({
        message: 'Internal Error, call sys admin',
      });
    }
  },
  updateSlide: async function(req, res) {
    const { id } = req.params;
    const { body } = req;

    const existe = await SlideService.getSlide(id);
    if (!existe) {
      return res.status(RESOURCE_NOT_FOUND).json({ message: 'resourse not found' });
    }
    
    try {
      await SlideService.update({ id, ...body });
      return res.status(OK).json({ message: 'Slide created' })
    } catch (error) {
      console.log(error);
      return res.status(INTERNAL_SERVER_ERROR).json({
        message: 'Internal Error, call sys admin',
      });
    }
  },
}
