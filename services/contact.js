const { Contact } = require('../models/index');

class ContactService {
  static async getAllBackOfficeContact() {
    const allContact = await Contact.findAll({
    attributes: ["name", "phone", "email", "message", "createdAt"],
  });
    if (allContact) {
      return allContact;
    } else {
      return "Contact Not Found";
    }
  }
  static async createContact(data) {
    return await Contact.create(data);
  }
}

module.exports = ContactService;
