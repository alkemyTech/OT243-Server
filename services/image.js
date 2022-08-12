const ImageRepository = require('../utils/imageRepository');
const imageRepository = new ImageRepository();

const uploadImageService = async (imageName, file) => {

    const imageURL = await imageRepository.uploadImage(imageName, file.buffer, file.mimetype);

    return imageURL;
}

module.exports = uploadImageService;