const ContactService = require("../services/contact");
const { OK, INTERNAL_SERVER_ERROR } = require("../utils/httpCodes");

const getAllBackOfficeContact = async (req, res) => {
  try {
    allContact = await ContactService.getAllBackOfficeContact();
    return res.status(OK).json({
      msg: "All Contact",
      allContact,
    });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json(error);
  }
};

const createContact = async (req, res) => {
  const contact = req.body;

  try {
    return res.status(OK).json({
      msg: 'Contact created',
      contact
    });
  } catch (error) {
    return res.status(INTERNAL_SERVER_ERROR).json({
      msg: 'Contact not created',
      error
    });
  }
};

module.exports = {
  getAllBackOfficeContact,
  createContact
}