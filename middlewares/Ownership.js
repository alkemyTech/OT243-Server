const { getUser } = require("../services/user")
const { BAD_REQUEST, UNAUTHORIZED } = require("../utils/httpStatus")
const UserRole = require('../utils/roles')

module.exports = {
  ownership: async(req, res, next) => {
    const { userData: { id } } = req.payloadToken
    const token = req.headers['authorization']
    if(!token) {
      res.status(BAD_REQUEST).json({ msg:'Access denied' })
    }
    const user = await getUser(id);
    if ( user.roleId !== UserRole.ADMIN && id !== Number(req.params.id)) {
      res
        .status(UNAUTHORIZED)
        .json({
            msg: 'Access denied'
          });
    }
    next();
  },
}