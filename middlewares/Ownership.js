const { BAD_REQUEST } = require("../utils/httpStatus")
const UserRole = require('../utils/roles')

module.exports = {
  ownership: async(req, res, next) => {
    const { id } = req.params
    const token = req.headers['authorization']
    if(!token) {
      res.status(BAD_REQUEST).json({ msg:'Access denied' })
    }
    const user = jwt.verify(token,  process.env.JWT_SECRET_PRIVATE_KEY)
    if ( user.roleId !== UserRole.ADMIN && id !== user.roleId){
      res
        .status(httpStatus.UNAUTHORIZED)
        .json({
            msg: 'Access denied'
          });
    }
    next();
    
  },
}