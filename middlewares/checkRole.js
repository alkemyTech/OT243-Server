const httpStatus = require('../utils/httpStatus')
const UserRole = require('../utils/roles')

class CheckRole {

    static  isAdmin( req, res, next) {

        //GODO  check con tokken generado!! 
        const user = req.user 
        
        

        if(!user){
            res
                .status(httpStatus.BAD_REQUEST)
                .json({
                    msg:`Access denied , token incorrect/expire`
                })
        }else{
            if ( user.role.id !== UserRole.ADMIN){
                res
                    .status(httpStatus.UNAUTHORIZED)
                    .json({
                        msg:'Access denied , you dont hav auth'
                    });
            }else{
                next()
            }
        }

    }

}



module.exports =CheckRole

