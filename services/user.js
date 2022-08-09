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
    static async userExist(id) {
        return await User.findOne({ where: { id } });
    }
    static async userUpdate(id, data) {
        return await User.update(data, { where: { id } });
    }
    static async userDelete(id) {
        return await User.destroy({ where: { id } });
    }

    // Este servicio deberá imeplementarse dentro del archivo de servicios de Contactos
    static async getAllContacts() {
        //return await Contact.findAll(); 
        return await User.findAll(); // Borrar
    }
    // Este servicio deberá imeplementarse dentro del archivo de servicios de Contactos

}

module.exports = UserService;