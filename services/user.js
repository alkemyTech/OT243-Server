const { User } = require('../models/index');

class UserService {
    static async create(data) {
        return await User.create(data)
    }
    static async userLogin(email) {
        return await User.findOne({ where: { email } });
    }
}

module.exports = UserService;