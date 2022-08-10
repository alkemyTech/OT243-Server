const ContactService = require("../services/contact");
const httpCodes = require("../utils/httpCodes");

const getAllBackOfficeContact = async (req, res) => {

  try {
    allContact = await ContactService.getAllBackOfficeContact();
    res.status(httpCodes.OK).json({
      msg: "All Contact",
      allContact,
    });
  } catch (error) {
    res.status(httpCodes.INTERNAL_SERVER_ERROR).json(error);
  }
};


module.exports={
    getAllBackOfficeContact,
}