const { User } = require('../models/index');

class UserService {
    static async create(data) {
        return await User.create(data)
    }
    static async userLogin(email) {
        return await User.findOne({ where: { email } });
    }
    static async getUser(id) {
        return await User.findByPk(id);
    }
}

module.exports = UserService;