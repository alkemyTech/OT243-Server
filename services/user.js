const { User } = require('../models/index');

class UserService {
    static async create(data) {
        return await User.create(data)
    }
}

module.exports = UserService;