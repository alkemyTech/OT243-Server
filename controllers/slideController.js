const SlideService = require('../services/slide');
const { OK, RESOURCE_NOT_FOUND } = require('../utils/httpCodes');
const { INTERNAL_SERVER_ERROR } = require('../utils/httpStatus');

module.exports = {
  getSlide: async function(req,res) {
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
  getListSlide: async function (req, res) {
    try {
      const slides = await SlideService.getListSlide();
      return res.status(OK).json({ slides });
    } catch (error) {
      console.log(error);
      return res.status(INTERNAL_SERVER_ERROR).json({
        message: 'Internal Error, call sys admin',
      });
    }
  }
}
