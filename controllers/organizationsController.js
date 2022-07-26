const OrganizationService = require("../services/organization");
const httpStatus = require("../utils/httpStatus");

//GET ALL
const getAllOrganizations = (req, res) => {
  res.status(200).json({
    message: "GetAll Orgnaizations ",
  });
};
//GET ONE
const  getOrganizations = (req,res)=>{
  res.status(200).json({
      message: 'GetOne Orgnaizations !',
    });
}
// POST
const createOrganizations = (req, res) => {
  res.status(201).json({
    message: "Create Organizations!",
  });
};

// UPDATE
const updateOrganizations = async (req, res) => {
  const id= req.params.id
  const dataUpdate= {...req.body}

  try{

    
     const organizationUpdate= await OrganizationService.upDateData(dataUpdate,id)
     res.status(httpStatus.OK).send({
      organizationUpdate
     });
  }catch(error){
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
  }
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
