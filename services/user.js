const { User } = require('../models/index');

class UserService{
    static async userLogin(email){
        return await User.findOne({ where: { email } });
    }
}

module.exports = UserService;