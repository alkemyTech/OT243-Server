
const { userExist } = require('../services/user');
const httpStatus = require('../utils/httpStatus')
const UserRole = require('../utils/roles')


class CheckRole {

    static  async isAdmin  ( req, res, next) {

        //check con token generado!! 
        
        let token = req.headers['authorization'];

        if (!token) {
        res
        .status(httpStatus.BAD_REQUEST)
        .json({
            msg:`Access denied , token not found/expire`
        })
        }
        else{

        const tokkenDATA = req.payloadToken
        const user = await userExist(tokkenDATA.userData.id)
            
            if ( user.roleId !== UserRole.ADMIN){
                res
                    .status(httpStatus.UNAUTHORIZED)
                    .json({
                        msg:'Access denied , you dont have auth'
                    });
            }else{
                next()
            }
        }

    }


}


module.exports =CheckRole

