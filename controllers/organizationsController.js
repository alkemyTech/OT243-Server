const OrganizationService = require("../services/organization");
const httpStatus = require("../utils/httpStatus");

//GET ALL
const getAllOrganizations = (req, res) => {
  res.status(200).json({
    message: "GetAll Orgnaizations ",
  });
};
//GET ONE
const getOrganizations = async (req, res) => {
  try {
    const id = req.params.id;
    const organization = await OrganizationService.FindbyPk(id);
    res.status(httpStatus.OK).send({
      organization,
    });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
};
// POST
const createOrganizations = (req, res) => {
  res.status(201).json({
    message: "Create Organizations!",
  });
};

// UPDATE
const updateOrganizations = (req, res) => {
  res.status(200).json({
    message: "Update Organizations!",
  });
};

// DELETE
const deleteOrganizations = (req, res) => {
  res.status(204).json({
    message: "Delete Organizations!",
  });
};

module.exports = {
  getAllOrganizations,
  getOrganizations,
  createOrganizations,
  updateOrganizations,
  deleteOrganizations,
};
