const ContactModel = require("../models").Contact;
/* TICKET 55
Al completar el Formulario de Contacto, se almacenará en la base de datos. Nombre de tabla: contacts. 
Contendrá los campos name, phone, email, message, deletedAt (utilizada para soft delete)

*/


class ContactService {
  static async getAllBackOfficeContact() {
    const allContact = await ContactModel.findAll({
    attributes: ["name", "phone", "email", "message", "createdAt"],
  });
    if (allContact) {
      return allContact;
    } else {
      return "Contact Not Found";
    }
  }
}

module.exports = ContactService;
