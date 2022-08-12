const uploadImageService = require('../services/image')
const { INTERNAL_SERVER_ERROR } = require('../utils/httpCodes');


const uploadImage = async (req, res, next) => {
    try {
        const imageName = req.body.imageName;
        const image = req.file;

        const imageURL = await uploadImageService(imageName, image);

        req.imageURL = imageURL
        next();
    } catch (error) {
        return res.status(INTERNAL_SERVER_ERROR).json({
            msg: 'Upload image error',
            message: error
        });
    }
};

module.exports = uploadImage;