const { User } = require('../models/index');

class UserService {
    static async create(data) {
        return await User.create(data)
    }
    static async userLogin(email) {
        return await User.findOne({ where: { email } });
    }
    static async userExist(id) {
        return await User.findOne({ where: { id } });
    }
    static async userUpdate(id, data) {
        return await User.update(data, { where: { id } });
    }
}

module.exports = UserService;