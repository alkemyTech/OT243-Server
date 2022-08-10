const AWS = require('aws-sdk');

class ImageRepository {

    constructor() {
        this.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccesKey: process.env.AWS_SECRET_ACCESS_KEY
        });
    }

    uploadImage(name, image, type) {
        const Key = name + '.' + type.split('/')[1];

        return new Promise((resolve, reject) => {
            const params = {
                Bucket: process.env.AWS_BUCKET_NAME,
                Key,
                Body: image,
                ContentType: type
            };

            this.s3.upload(params, (err, data) => {
                if (err) {
                    reject(err);
                }

                resolve(`HTTPS://${process.env.AWS_BUCKET_NAME}.s3.amaznaws.com/${Key}`);
            });
        })
    }
}

module.exports = ImageRepository;