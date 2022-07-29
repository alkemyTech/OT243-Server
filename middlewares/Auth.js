const { FORBIDDEN } = require("../utils/httpCodes");
const jwt = require("jsonwebtoken");

const validateUserToken = (req, res, next) => {
    const token = req.headers.authorization ?  req.headers.authorization.split(" ")[1] : "";
    if(!token) return res.status(FORBIDDEN).json({ code: FORBIDDEN });
    try {
        const payload = jwt.verify(token,"clave de prueba");
        next();
    } catch (error) {
        return res.status(FORBIDDEN).json({ code: FORBIDDEN });
    }
}


module.exports = {
    validateUserToken,
}