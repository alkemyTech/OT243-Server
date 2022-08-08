const jwt = require('jsonwebtoken');
const { UNAUTHORIZED } = require('./httpCodes');

const generateJWT = (userData = '') => {
    return new Promise((resolve, reject) => {
        const payload = { userData };

        jwt.sign(
            payload,
            process.env.JWT_SECRET_PRIVATE_KEY, 
            { expiresIn: process.env.TOKEN_EXPIRATION_TIME },
            (error, token) => {
                if (error) {
                    console.log(error);
                    reject('Ups, Token was not generated')
                } else {
                    resolve(token);
                }
            }
        )
    });
};

const validateJWT = async (req, res, next) => {
    let token = req.headers['authorization'];

    if (!token) { // If token is empty
        return res.status(UNAUTHORIZED).json({
            msg: 'No token recieved'
        });
    } else {
        token = token.replace('Bearer ', '')

        try {
            const payload = jwt.verify(token, process.env.JWT_SECRET_PRIVATE_KEY);
            req.payloadToken = payload;
            next();
        } catch (error) {
            console.log(error);
            return res.status(UNAUTHORIZED).json({
                msg: 'Invalid token'
            });
        }
    }
}

module.exports = {
    generateJWT,
    validateJWT
};